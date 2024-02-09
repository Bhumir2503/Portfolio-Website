import "../styles/about.css";
import { useRef } from "react";

function About({setaboutLocation}) {

  const aboutRef = useRef(null);

  return (
    <div className="About" id="About" ref={aboutRef}>
      <h1 className="Title">Hey There!! <div className="hand">👋</div></h1>
      <p className="First">
        I'm deeply passionate about technology and innovation, a flame that was first ignited in high school during a transformative computer 
        science class. Coding felt like deciphering a secret language, and the late-night sessions of tinkering with programs and debugging fueled 
        my insatiable curiosity. The satisfaction of seeing everything fall into place marked the beginning of a journey where computer science evolved 
        from a mere hobby to a fundamental cornerstone of my life.<br /> <br />
        Building on this foundation, my academic journey led me to the University of Tennessee, Knoxville, where I pursued a major in Computer Science. 
        Alongside, I delved into the intricacies of mathematics with a minor and explored the captivating world of machine learning. This educational 
        pursuit allowed me to uncover the dynamic intersections between mathematical principles and cutting-edge technology, solidifying my technical 
        prowess and igniting a fervor for continual exploration and innovation within the ever-evolving landscape of computer science. <br /> <br />
        As a seasoned full stack developer, I bring to the table a diverse skill set honed through hands-on experience and a commitment to lifelong 
        learning. My journey is one of continuous growth, fueled by an unwavering enthusiasm for the limitless possibilities that technology presents. 
        I am eager to contribute my skills and insights to the dynamic and innovative landscape of the tech industry, ready to take on new challenges 
        and make meaningful contributions in this ever-evolving field.
      </p>
    </div>
  );
}

export default About;