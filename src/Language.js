import React from "react";
import logo from './assets/images/logo.jpeg'
import {
  Link
} from "react-router-dom";
  
export const Language = () => {
    return (
        <article id="languageBackground">
            <section className="languageContainer">
                <div className="languageImgContainer"> 
                <img className="languageImg" src={logo} alt='Manuel Todorov'></img>
                </div>
                <div className="languageBtnContainer">
                <Link to="/inicio">
                    <button className="languageBtn paragraph">Español</button>   
                </Link>
                <Link to="/home">
                    <button className="languageBtn paragraph">English</button>   
                </Link>
                </div>
            </section>
        </article>
    )
    
}

export default Language;