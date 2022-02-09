import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Language  from './Language'
import { Inicio } from './ComponentsSpanish/Inicio'
import { Proceso } from './ComponentsSpanish/Proceso'
import { Servicios } from './ComponentsSpanish/Servicios'
import { Contacto } from './ComponentsSpanish/Contacto'
import { Home } from './ComponentsEnglish/Home'
import { Services } from './ComponentsEnglish/Services'
import { Contact } from './ComponentsEnglish/Contact'
import { Error } from './Error'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
        <Routes>
          <Route path="/" element={ <Language /> } />
          <Route path="/inicio" element={ <Inicio /> } />
          <Route path="/proceso" element={ <Proceso /> } />
          <Route path="/servicios" element={ <Servicios /> } />
          <Route path="/contacto" element={ <Contacto /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/services" element={ <Services /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="*" element={ <Error />} />
        </Routes> 
        </div>
    </Router>
    );
  }
}

export default App;
