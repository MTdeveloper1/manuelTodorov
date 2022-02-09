import React from "react";
import meeting from "../assets/images/meeting.png";
import done from "../assets/images/done.png";
import money from "../assets/images/money.png";
import programador from "../assets/images/programador.jpeg";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import bootstrap from "../assets/images/bootstrap.png";
import sass from "../assets/images/sass.png";
import javascript from "../assets/images/javascript.png";
import webCourse from "../assets/images/webCourse.png";
import javascriptCourse from "../assets/images/javascriptCourse.png";
import reactCourse from "../assets/images/reactCourse.png";
import react from "../assets/images/react.png";
import petshop from "../assets/images/petshop.png";
import stani from "../assets/images/stani.png";
import cartomize from "../assets/images/cartomize.png";
import { Link } from "react-router-dom";
import NavBarEs from "./NavBarEs";

export const Inicio = () => {
  return (
    <>
      <NavBarEs />

      <article className="firstContainer">
        <section className="developSection">
          <h1 className="title developParagraph">Desarrollo tu página web</h1>
        </section>

        <section className="processSection">
          <div className="processContainer">
            <div className="div1 processDiv">
              <img className="processImg" src={meeting} alt=""></img>
              <p className="paragraph processP">
                Hablamos del proyecto y se hace un boceto del diseño principal.
              </p>
            </div>
            <div className="div2 processDiv">
              <img className="processImg" src={done} alt=""></img>
              <p className="paragraph processP">
                Se comienza a desarrollar y se paga la mitad por adelantado.
              </p>
            </div>
            <div className="div3 processDiv">
              <img className="processImg" src={money} alt=""></img>
              <p className="paragraph processP">
                Termina el proyecto y termina el pago completo.
              </p>
            </div>
          </div>

          <Link to="/proceso">
            <p className="moreProcess title">Acerca del proceso</p>
          </Link>
        </section>
      </article>

      <article id="acerca" className="aboutContainer">
        <h3 className="title aboutTitle">
          <i>Acerca de mi</i>
        </h3>
        <div className="aboutLine"></div>
        <section className="aboutSection">
          <img
            className="aboutImg"
            src={programador}
            alt="Manuel Todorov desarrollador web front end"
          ></img>
          <div className="aboutInfoContainer">
            <p className="aboutP paragraph">
              Mi nombre es Manuel Todorov soy un Desarrollador web Front end,
              (Front-end consiste en la conversión de datos en una interfaz
              gráfica para que el usuario pueda ver e interactuar con la
              información de forma digital). Me apasiona programar, diseñar y
              terminar el proyecto viendo como eso fue creacion mia.
            </p>
          </div>
        </section>
        <section className="skillsContainer">
          <h3 className="title skillsTitle">
            {" "}
            <i>Skills</i>{" "}
          </h3>
          <div className="skillsImgContainer">
            <div className="skillsContainer1">
              <img className="skillIcon" src={html} alt="HTML 5"></img>
              <img className="skillIcon" src={css} alt="CSS 3"></img>
              <img
                className="bootstrapIcon"
                src={bootstrap}
                alt="BOOTSTRAP"
              ></img>
            </div>
            <div className="skillsContainer2">
              <img className="skillIcon" src={sass} alt="SASS"></img>
              <img
                className="skillIcon"
                src={javascript}
                alt="JAVASCRIPT"
              ></img>
              <img className="skillIcon" src={react} alt="REACT JS"></img>
            </div>
          </div>
        </section>
      </article>
      <article className="coursesContainer">
        <img
          className="courseImg"
          src={webCourse}
          alt="Desarrollo web Manuel Todorov CoderHouse"
        ></img>
        <img
          className="courseImg"
          src={javascriptCourse}
          alt="Javascript Manuel Todorov CoderHouse"
        ></img>
        <img
          className="courseImg"
          src={reactCourse}
          alt="React JS Manuel Todorov CoderHouse"
        ></img>
      </article>

      <article id="proyectos" className="proyectsContainer">
        <h3 className="proyectsTitle title">
          <i>Proyectos</i>
        </h3>
        <div className="aboutLine"></div>
        <div className="proyectsImgContainer">
          <div className="box">
          <a
          target="_blank"
            href="https://mtdeveloper1.github.io/stanimir/"
            className="proyectLink"
          >
            <img src={stani} className=" proyectImg"></img>
            <div className="cape paragraph">Página personal</div>
          </a>
          </div>

          <div className="box">
          <a target="_blank" href="" className="proyectLink">
            {" "}
            <img src={cartomize} className=" proyectImg"></img>{" "}
            <div className="cape">
              <h4>Ecommerce</h4>
            </div>
          </a>
          </div>

          <div className="box">
          <a
            target="_blank"
            href="https://mtdeveloper1.github.io/PetShop/"
            className="proyectLink"
          >
            {" "}
            <img src={petshop} className=" proyectImg"></img>{" "}
            <div className="cape">
              <h4>Negocio</h4>
            </div>
          </a>
          </div>
        </div>
      </article>

      <footer>
        <a href="https://github.com/MTdeveloper1" target="_blank">
      <img src="https://img.icons8.com/material-outlined/48/ffffff/github.png"/>
      </a>
      <h6 className="paragraph">Todos los derechos reservados ©</h6>
      </footer>
    </>
  );
};

export default Inicio;
