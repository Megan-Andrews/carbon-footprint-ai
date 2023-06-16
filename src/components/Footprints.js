import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Footprints = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const footprintRef = useRef(null);

  useEffect(() => {
    // Set initial coordinates to the cursor's position
    const handleInitialMousePosition = (event) => {
      const { clientX, clientY } = event;
      const { top, left } = footprintRef.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      setCoordinates({ x, y });
    };

    // Attach the event listener to capture the initial cursor position
    document.addEventListener('mousemove', handleInitialMousePosition);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleInitialMousePosition);
    };
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { top, left } = footprintRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setCoordinates({ x, y });
  };

  const animatedProps = useSpring({
    to: { x: coordinates.x, y: coordinates.y },
  });

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', height: '100vh', cursor: 'none' }}
    >
      <animated.div
        ref={footprintRef}
        style={{
          position: 'absolute',
          top: animatedProps.y,
          left: animatedProps.x,
        }}
      >
        {/* Your footprint SVG or image */}
        {/* Replace the div below with your footprint image or SVG */}
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'black',
            borderRadius: '50%',
          }}
        />
      </animated.div>
    </div>
  );
};

export default Footprints;
