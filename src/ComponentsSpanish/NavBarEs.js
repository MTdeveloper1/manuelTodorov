import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.jpeg";
import { Link } from "react-router-dom";

export default function NavbarEs() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header>
      <nav className="navbar">
        <Link to="/inicio">
          <img className="headerImg" src={logo} alt="Manuel Todorov"></img>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            activeClassName="active"
            onClick={handleClick}
          >
            <a href="#acerca" className="paragraph nav-links">
              Acerca
            </a>
          </li>
          <div className="navDeco"></div>
          <li
            className="nav-item"
            activeClassName="active"
            
            onClick={handleClick}
          >
            <a href="#proyectos" className="paragraph nav-links">
              Proyectos
            </a>
          </li>
          <div className="navDeco"></div>
          <li className="nav-item paragraph">
            <Link
              to="/servicios"
              activeClassName="active"
              
              onClick={handleClick}
            >
              <a href="#proyectos" className="paragraph nav-links">
                Servicios
              </a>
            </Link>
          </li>
          <div className="navDeco"></div>
          <li className="nav-item paragraph">
            <Link
              to="/contacto"
              activeClassName="active"
              
              onClick={handleClick}
            >
              <a href="#contacto" className="paragraph nav-links">
                Contacto
              </a>
            </Link>
          </li>
          <div className="navDeco"></div>
        </ul>
    <div className="btnContainer">
        <button onClick={handleClick} className="btn paragraph">
          Menu
        </button>
        </div>    
      </nav>
    </header>
  );
}
