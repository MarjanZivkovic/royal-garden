import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import darkLogo from "../img/logo-dark1.jpg";
import { FaAngleDown, FaPhone, FaTimes, FaEnvelope, FaFacebook, FaViber  } from "react-icons/fa";

function Header() {
  const [opened, setOpened] = useState(false);

  function openMenu() {
    setOpened((prevState) => !prevState);
  }
  
  function scrollToTop(){
    setOpened(false);
    window.scrollTo(0, 0);
  }

  const year = new Date().getFullYear();

  return (
    <nav className={`main-nav ${opened ? "opened" : ""}`}>
      <div className="wrapper d-flex big-screen-nav">
        <button className="menu-btn d-flex" onClick={openMenu} title="Meni">
          {opened ? <FaTimes /> : <FaAngleDown />}
        </button>
        <div className="big-screen-link">
         <NavLink to="/o-nama" onClick={scrollToTop}>O nama</NavLink>
        </div>
        <div className="big-screen-link">
          <NavLink to="/naše-cveće" onClick={scrollToTop}>Naše cveće</NavLink>
        </div>
        <div>
          <Link className="logo-home-link" to="/" title="Početna" onClick={scrollToTop}>
            <img src={darkLogo} alt="logo" />
          </Link>
        </div>
        <div className="big-screen-link">
          <NavLink to="/naše-drveće" onClick={scrollToTop}>Naše drveće</NavLink>
        </div>
        <div className="big-screen-link">
          <NavLink to="/naše-usluge" onClick={scrollToTop}>Naše usluge</NavLink>  
        </div>
        <a className="phone-btn d-flex" href="tel:+38169796362">
          <FaPhone /> 
        </a>
      </div>
      <div className="wrapper ul-wrapper">
        <ul className="main-ul text-center">
          <li>
            <NavLink to="/" onClick={scrollToTop}>Početna</NavLink>
          </li>
          <li>
            <NavLink to="/o-nama" onClick={scrollToTop}>O nama</NavLink>
          </li>
          <li>
            <NavLink to="/naše-cveće" onClick={scrollToTop}>Naše cveće</NavLink>
          </li>
          <li>
            <NavLink to="/naše-drveće" onClick={scrollToTop}>Naše drveće</NavLink>
          </li>
          <li>
            <NavLink to="/naše-usluge" onClick={scrollToTop}>Naše usluge</NavLink>
          </li>
        </ul>
        {opened && <ul className="nav-social">
            <li><a href="viber://chat/?number=%2B38169796362"><FaViber />Viber Chat</a></li>
           <li><a href="mailto:n.milenkovic1968@gmail.com"><FaEnvelope /> n.milenkovic1968@gmail.com</a></li>
           <li><a href="https://www.facebook.com/FLOWERS.MILENKOVIC/" target="_blank" rel="noopener noreferrer"><FaFacebook /> FLOWERS.MILENKOVIC</a></li>
        </ul>}
        {opened && <div className="nav-copy text-center">&copy; <span className="yellow">{year}</span> RG Milenković</div>}
      </div>
    </nav>
  );
}

export default Header;
