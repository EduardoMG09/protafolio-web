import React from "react";
import datosNav from "./nav-var.json"
//import batman from "../assets/batman_logo2.png"

function Header(){
    return (
        <div>
            <div className="header">
                {/*<div className="cont-img">
                    <img className="batman" src={batman} alt="" />
                </div>*/}
                {datosNav.secciones.map((sec, index) => (
                <div key={index} className="icons">
                    <i className={`bi ${sec.icono} icon ${sec.nombre}`}></i>
                </div>))}
            </div>
        </div>
    );
}

export default Header;