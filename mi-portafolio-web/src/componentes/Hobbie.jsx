import React from "react";
import data from "./certificaciones.json";

function Hobbies(){
    return(
        <div className="container-certificados">
            <div className="titulo-categoria certificados-titulo">
                Certificados
            </div>
            <div className="contenedor-lista-certificados">
                    {Object.entries(data.certificados).map(([nombre, info]) =>(
                        <span 
                        className="item-certificados"
                        key={nombre}>
                        <strong>{nombre}</strong>
                        <ul>
                        <li><strong>Empresa:</strong> {info.Empresa}</li>
                        <li>
                            <strong>Link:</strong>{" "}
                            {info.Link ? (
                            <a href={info.Link} target="_blank" rel="noopener noreferrer">Ver certificado</a>
                            ) : (
                            "No disponible"
                            )}
                        </li>
                        </ul>
                    </span>
                    ))}
            </div>
        </div>
    );
}

export default Hobbies;