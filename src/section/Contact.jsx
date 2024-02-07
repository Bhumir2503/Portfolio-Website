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
      <form action="">
      <h1 className='title'>Get in Touch</h1>
        <div className='top'>
          <input required value={name} onChange={handleNameChange} className = 'name' type="text" placeholder='Name' />
          <input required value={email} onChange={handleEmailChange} className = 'email' type="email" placeholder='Email' />
        </div>
        <textarea required value={message} onChange={handleMessageChange} className = 'message' placeholder='Message Me!' />
        <button className='submit' onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;