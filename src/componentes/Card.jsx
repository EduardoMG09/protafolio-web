import React from "react";

const images = import.meta.glob(`../assets/logos/*`,{eager:true}); 
    
function Card({title}){
    const icono = title.icono;
    const nombre = title.nombre;
    
    const imagePath = Object.entries(images).find(([path]) =>
        path.includes(icono)
        )?.[1]?.default; 
    return (
        <div className="card">
            <div className="title-card">{nombre}</div>
            {imagePath ? (
            <img src={imagePath} alt={nombre} className="card-img" />
      ) : (
        <p>Imagen no encontrada</p>
      )}
        </div>
    );
}

export default Card;