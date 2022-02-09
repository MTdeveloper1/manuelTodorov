import React from "react";
import logo from '../assets/images/logo.jpeg'
import {
    Link
  } from "react-router-dom";

export const Services= () => {
    return (
        <header className="header">
            <img className="homeLogo" src={logo} alt='Manuel Todorov'></img>
            <nav className="nav pc">
                <a href="acerca">Acerca</a>
                <a href="proyectos">Proyectos</a>
                <Link to="/servicios">
                <a href="servicios">Servicios</a>
                </Link>
                <Link to="/contacto">
                <a href="contacto">Contácto</a>
                </Link>
            </nav>
        </header>
    )
    
}

export default Services;