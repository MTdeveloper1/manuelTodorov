import React from "react";
import logo from "../assets/images/logo.jpeg";
import { Link } from "react-router-dom";

export const Servicios = () => {
  return (
    <>
      <header>
        <nav className="navbar serviceNav">
          <Link to="/inicio">
            <img
              className="headerImg serviceNavImg"
              src={logo}
              alt="Manuel Todorov"
            ></img>
          </Link>
        </nav>
      </header>

      <article className="serviceArticle">
        <section className="servicesContainer">
          <div className="service adviceContainer">
            <h5 id="adviceTitle" className="title">
              Asesoramiento web
            </h5>
            <p id="serviceP" className="paragraph">
              A la hora de desarrollar un producto digital surgen muchas dudas,
              problemas e inquietudes que hacen los proyectos no se terminen
              aclarando. Por eso esta esta seccion donde hablamos y hasta que no
              se te vayan todas las dudas no termina nuestra charla. Estas
              llamadas pueden ser por zoom, google meet, whastapp etc. Consulta,
              pregunta y sacate dudas.
            </p>
            <Link to="/contacto">
              <button className="serviceBtn paragraph">
                <span>Contacto</span>
                <div class="liquid"></div>
              </button>
            </Link>
          </div>
          <div className="service">
            <h5 className="title">Página web</h5>
            <p id="serviceP" className="paragraph">
              Una página web es una excelente opción para impulsar tu negocio o
              también una forma creativa, original y profesional de presentarte
              a un público específico. Por eso aca me contas tu idea la
              desarrollamos en un boceto, acordamos un presupuesto y lo
              implementamos para que el usuario que visite tu página tenga una
              experiencia agradable.
            </p>
            <Link to="/contacto">
              <button className="serviceBtn paragraph">
                <span>Contacto</span>
                <div class="liquid"></div>
              </button>
            </Link>
          </div>
          <div className="service">
            <h5 className="title">Ecommerce</h5>
            <p id="serviceP" className="paragraph">
              Una página es la mejor manera de mostrarle tus productos al
              publico y tambien manejar los productos y precios con una base de
              datos que provee google y es muy sencilla de utilizar para
              mantener precios, stock y productos. La idea seria mostrar tus
              productos hacer un carrito de compra y que luego el usuario pueda
              comprar. Tu negocio digital.
            </p>
            <Link to="/contacto">
              <button className="serviceBtn paragraph">
                <span>Contacto</span>
                <div class="liquid"></div>
              </button>
            </Link>
          </div>
        </section>
      </article>

      <footer className="serviceFooter">
        <a href="https://github.com/MTdeveloper1" target="_blank">
          <img src="https://img.icons8.com/material-outlined/48/ffffff/github.png" />
        </a>
        <h6 className="paragraph">Todos los derechos reservados ©</h6>
      </footer>
    </>
  );
};

export default Servicios;
