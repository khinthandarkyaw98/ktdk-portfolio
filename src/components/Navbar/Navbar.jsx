import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from '../MobileNav/MobileNav';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if(contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>

      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <div></div>

          <ul>
            <li>
              <a className="menu-item" href='#home'>Home</a>
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

          <button className="menu-btn" onClick={toggleMenu}>

            <span>
              {openMenu ? (
                <>
                <span
                  className="close"
                  style={{ fontSize: "1.8rem" }}
                >
                  X
                </span>
                </>
              )
              : (
                <div className="humberger-container">
                  <span
                    className="humberger"
                    style={{ fontSize: "1.8rem" }}
                  >
                    -
                  </span>
                  <span
                    className="humberger"
                    style={{ fontSize: "1.8rem" }}
                  >
                    -
                  </span>
                  <span
                    className="humberger"
                    style={{ fontSize: "1.8rem" }}
                  >
                    -
                  </span>
                </div>
              )}
            </span>
          </button>

        </div>
      </nav>
    </>
  );
};

export default Navbar;