import React from "react";
import data from "./contacto.json";

function Contacto() {
    return (
        <div className="contacto-container-area">
            <div className="titulo-categoria contacto-titulo">
                Contacto
            </div>
            <div className="contacto-items">
                {Object.entries(data.contacto).map(([red, info]) => (
                    <div className="contenedor-item">
                        <a 
                            href={info.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="item-contacto" 
                            key={red}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div className="icono-contacto">
                                <i className={`bi ${info.icono}`}></i>
                            </div>
                            <div className="icono-nombre">
                                <strong>{red}</strong>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contacto;
