import React from "react";
import datosNav from "./nav-var.json"
//import batman from "../assets/batman_logo2.png"

function Header(){
    return (
        <div className="container-header">
            <div className="header">
                <div className="icons">
                    {datosNav.secciones.map((sec, index) => (
                        <span key={index} className="icon">{sec.nombre}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;