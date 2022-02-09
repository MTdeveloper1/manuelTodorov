import React from "react";


export const Contacto = () => {
  return (
    <>
      <article className="contactArticle">
        <section className="contactSection">
          <form id="form" class="form" action="">
              <div className="contactTitleContainer">
            <h3 class="formTitle paragraph">Contacto</h3>
            </div>
            <div class="underlineW"></div>
            <label className="paragraph formP">Nombre completo</label>
            <input name="name" required type="text" id="name"></input>
            <label className="paragraph formP">Correo electrónico</label>
            <input type="email" name="email" id="email" required></input>
            <label className="paragraph formP">Mensaje</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit" class="submitBtn">
              Enviar
            </button>
          </form>
          <a id="passInfo" href="mailto:manueltodorov@gmail.com"></a>
        </section>
      </article>
    </>
  );
};

export default Contacto;
