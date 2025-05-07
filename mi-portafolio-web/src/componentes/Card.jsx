import React from "react";

const images = import.meta.glob(`../assets/logos/*`,{eager:true}); 
    
function Card(props){
    const icono = props.icono;
    const nombre = props.nombre;
    
    const imagePath = Object.entries(images).find(([path]) =>
        path.includes(icono)
        )?.[1]?.default; 
    return (
        <div className="card transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:z-10" itemId={props.itemId}>
            <div className="title-card ">
                {nombre}</div>
            {imagePath ? (
            <img src={imagePath} alt={nombre} className="card-img" />
      ) : (
        <p>Imagen no encontrada</p>
      )}
        </div>
    );
}

export default Card;