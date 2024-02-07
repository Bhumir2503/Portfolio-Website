import "../styles/about.css";
import { useRef } from "react";

function About({setaboutLocation}) {

  const aboutRef = useRef(null);

  window.addEventListener('scroll', () => {
    if (aboutRef.current) {
      const rect = aboutRef.current.getBoundingClientRect();
      const bottom = rect.bottom;
      setaboutLocation(bottom);
    }
  });


  return (
    <div className="About" ref={aboutRef}>
      <h1 className="Title">Hey There!! <div className="hand">&#128075;</div></h1>
      <p className="First">
        I'm passionate about technology and innovation, and it all started back in high school when I took a computer science class 
        that opened up a whole new universe for me. Suddenly, coding felt like decoding a secret language—I couldn't get enough. Late nights turned 
        into early mornings as I tinkered with programs, debugged endlessly, and felt that rush of satisfaction when everything fell into place. 
        From that moment on, computer science became more than a hobby; it became a cornerstone of my life.
      </p>
      <p className="Second">
        This passion led me to pursue higher education at the University of Tennessee, Knoxville, where I majored in Computer Science. 
        Alongside, I embraced a minor in mathematics and delved into the intriguing world of machine learning, eager to explore the intersections
        between mathematics and technology. This journey not only solidified my technical skills but also fueled my curiosity to push the 
        boundaries of innovation within the field. I'm constantly seeking new challenges and opportunities to grow, eager to make meaningful 
        contributions to the ever-evolving realm of technology.
      </p>
    </div>
  );
}

export default About;