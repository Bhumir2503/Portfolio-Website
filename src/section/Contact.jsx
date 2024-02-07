import '../styles/contact.css';
import { useState } from 'react';

function Contact(contactLocation) {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_jrdv80k","template_l23gxh8",{
      from_name: name,
      message: message,
      email: email,
    });
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className='Contact'>
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