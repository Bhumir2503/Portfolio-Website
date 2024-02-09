import { useEffect, useRef } from 'react';
import '../styles/landing.css';

function Landing({sethomeLocation}) {

  const landingRef = useRef(null);


  window.addEventListener('scroll', () => {
    if (landingRef.current) {
      const rect = landingRef.current.getBoundingClientRect();
      const top = rect.top;
      sethomeLocation(top);
    }
  });

  return (
    <div className="landing" ref = {landingRef}>
      <div className='left'>
        <div className='meInfo'>
          <h1>Bhumir Patel</h1>
          <h3>Full Stack Developer</h3>
          <p>I craft <strong>elegant</strong> designs and write <strong>clean</strong>, <strong>efficent</strong> code, all while enjoying every moment of it.</p>
        </div>
        <div className='download'>
          <a href="Resume.pdf" download="Bhumir Patel"><button href="">Resume<img src="download.svg" alt="" /></button></a>
        </div>
      </div>
      <div className='right'>
        <div className='landimg'>
          <img src="Bhumir.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Landing;