import React from "react";
import datosNav from "./nav-var.json"

function Header(){
    return (
        <div>
            <div className="header">
                <ul className="nav-var">
                    {datosNav.secciones.map((seccion, index) => (
                    <li className="lista-item" key={index}>{seccion}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;