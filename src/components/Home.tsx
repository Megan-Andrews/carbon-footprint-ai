import React, { useState } from 'react';
import { useTrail, a } from '@react-spring/web';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import styles from '../styles/Home.module.css';
import { ReactNode } from 'react';
import Pages from '../contexts/Pages.js';
import Context from '../contexts/Context.js';
import { useContext } from 'react';
import Footprints from './Footprints.js';
import one from '../images/home/1.png';
import two from '../images/home/2.png';
import three from '../images/home/3.png';
import four from '../images/home/4.png';
import five from '../images/home/5.png';
import six from '../images/home/6.png';
import seven from '../images/home/7.png';
import eight from '../images/home/8.png';
import nine from '../images/home/9.png';


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
      <div className='full-height'>
            <div className={`${styles.container}`} onClick={() => set(state => !state)}>
          <Trail open={open}>
            <span>Carbo</span>
            <span>Print</span>
            <span>.ai</span>
          </Trail>
          </div>
      </div>
        {/* <Parallax pages={2} style={{top: '0', left: '0'}} className="animation">
          <ParallaxLayer offset={0} speed={2.5} >
          <div className="animation_layer parallax">
            <img className="animation_layer parallax" src={one} alt="Image One" />
          </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5} >
            <div className="animation_layer parallax">
            <img src={two} alt="Image two" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}  >
            <div className="animation_layer parallax">
            <img src={three} alt="Image three" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}  >
            <div className="animation_layer parallax">
              <img src={four} alt="Image four" /> 
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}  >
            <div className="animation_layer parallax">
              <img src={five} alt="Image five" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5} >
            <div className="animation_layer parallax">
              <img src={six} alt="Image six" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5} >
            <div className="animation_layer parallax">
              <img src={seven} alt="Image seven" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5} >
            <div className="animation_layer parallax">
              <img src={eight} alt="Image eight" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5} >
            <div className="animation_layer parallax" id="nine">
              <img src={nine} alt="Image nine" />
            </div>
          </ParallaxLayer>
        </Parallax> */}
    </div>
  );
};

export default Home;
{/*  */}
