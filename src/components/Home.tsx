import React, { useState } from 'react';
import { useTrail, a } from '@react-spring/web';
import styles from '../styles/Home.module.css';
import { ReactNode } from 'react';
import Pages from '../contexts/Pages.js';
import Context from '../contexts/Context.js';
import { useContext } from 'react';


const Trail: React.FC<{ open: boolean,children: ReactNode; }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

const Home = () => {

  const [open, set] = useState(true)

  return (
    <div> 
        
        <div className="full-height">
            <div className={styles.container} onClick={() => set(state => !state)}>
          <Trail open={open}>
            <span className='text-left'>Carbon</span>
            <span>Footprint</span>
            <span>AI</span>
          </Trail>
          </div>
      </div>

    </div>
  );
};

export default Home;