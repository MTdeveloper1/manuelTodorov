import React from "react";
import logo from "./assets/images/logo.jpeg";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <article id="errorContainer">
      <img src={ logo }></img>
      <p className="errorP">404</p>
      <p className="notFound"> Not found </p>

      <Link to="/">
        <a href="idk">Back</a>
      </Link>
    </article>
  );
};

export default Error;
