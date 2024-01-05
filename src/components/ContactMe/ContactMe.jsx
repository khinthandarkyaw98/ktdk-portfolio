import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <div className='contact-container' id="contact">
      <h5>Contact Me</h5>

      <div className='contact-content'>
        <div style={{ flex: "1" }}>
          <ContactInfoCard iconUrl="./assets/images/email-icon.png" text="deeplearningcoral@gmail.com" />
          <ContactInfoCard iconUrl="./assets/images/inv-github-icon.png" text="https://github.com/khinthandarkyaw98" />
        </div>
        <div style={{ flex: "1" }}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactMe;