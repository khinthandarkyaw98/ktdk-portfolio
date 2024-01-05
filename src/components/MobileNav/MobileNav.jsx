import React from 'react';
import './MobileNav.css';

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");

  if(contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >

        <div className="mobile-menu-container">
          <div></div>
          <ul>
            <li>
              <a className="menu-item" href="#home">Home</a>
            </li>
            <li>
              <a className="menu-item" href="#skills">Skills</a>
            </li>
            <li>
              <a className="menu-item" href="#projects">Projects</a>
            </li>

            <button className="contact-btn" onClick={scrollToContact}>
              Contact Me
            </button>
          </ul>
        </div>

      </div>
    </>
  );
};

export default MobileNav;