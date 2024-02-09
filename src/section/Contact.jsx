import '../styles/contact.css';
import { useRef } from 'react';

function Contact({setcontactLocation}) {

  const contactRef = useRef(null);

  window.addEventListener('scroll', () => {
    if (contactRef.current) {
      const rect = contactRef.current.getBoundingClientRect();
      const top = rect.top;
      setcontactLocation(top);
    }
  });

  return (
    <div className='Contact' ref={contactRef}>
      <h1>Connect With Me.</h1>
      <div className='icons'>
        <a target='_blank' href="https://github.com/bhumir2503"><img src="github.svg" alt="" /></a>
        <a target='_blank' href="https://linkedin.com/in/bhumir-patel"><img src="linkedin.svg" alt="" /></a>
        <a target='_blank' href="https://discordapp.com/users/418762004849754112"><img src="discord.svg" alt="" /></a>
        <a target='_blank' href="https://wa.me/18653164371"><img src="whatsapp.svg" alt="" /></a>
        <a target='_blank' href="mailto: Bhumir2503@gmail.com"><img src="email.svg" alt="" /></a>
      </div>
    </div>
  );
}

export default Contact;