import { useEffect, useRef } from 'react';
import '../styles/landing.css';

function Landing({sethomeLocation}) {

  const landingRef = useRef(null);

  useEffect(() => {
    if (landingRef.current) {
      const rect = landingRef.current.getBoundingClientRect();
      const top = rect.top;

      sethomeLocation(top);
    }
  }, []);


  return (
    <div className="landing" ref = {landingRef}>
      <div className='left'>
        <div className='meInfo'>
          <h1>Bhumir Patel</h1>
          <h3>Full Stack Developer</h3>
          <p>
            My journey as a full stack developer began in high school, where my fascination with technology ignited. 
            It all started with a simple curiosity, tinkering with code in my spare time, exploring the intricacies of both front-end and back-end development. 
            From those early days of building basic websites and experimenting with different programming languages, my passion only grew stronger. 
            As I delved deeper into the world of software development, I honed my skills, constantly seeking new challenges and opportunities to expand my knowledge.
          </p>
        </div>
        <div className='download'>
          <button>Download<img src="download.svg" alt="" /></button>
        </div>
      </div>
      <div className='right'>
        <div className='landimg'>
          <img src="animation.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Landing;