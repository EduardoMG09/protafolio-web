import React from "react";

const images = import.meta.glob(`../assets/proyectos/*`,{eager:true}); 
    
function CardProject(props) {
    const icono = props.img;
    const name = props.titulo;

    const imagePath = Object.entries(images).find(([path]) =>
        path.endsWith(`/${icono}`)
    )?.[1]?.default;

    return (
        <div className="card-dev transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:z-10" itemId={props.itemId}>
            <div className="titulo-proyecto">{props.titulo}</div>

            <div className="imagen-proyecto">
                {imagePath ? (
                    <img className="img-proyecto" src={imagePath} alt={name} />
                ) : (
                    <p>Imagen no encontrada</p>
                )}
            </div>

            <div className="descripcion-proyecto">
                {props.descripcion || "Sin descripción disponible."}
            </div>

            {props.link && (
                <div className="link-proyecto">
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        Ver proyecto
                    </a>
                </div>
            )}
        </div>
    );
}

export default CardProject;