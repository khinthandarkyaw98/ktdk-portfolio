import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
      <form action="https://formspree.io/f/xgegerzp"
  method="POST">
        <div className='name-container'>
          <input type='text' name='first-name' placeholder='First Name' aria-label='First Name' required/>
          <input type='text' name='last-name' placeholder='Last Name'
          aria-label='Last Name' required/>
        </div>

        <input type='text' name='email' placeholder='Email'
        aria-label='Email' required/>
        <textarea type='text' name='message' placeholder='Message' rows={3} required/>

        <button>SEND</button>
      </form>
    </div>
  )
}

export default ContactForm;