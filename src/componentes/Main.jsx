import React from "react";
import datos from "./nav-var.json"
import imagen from "../assets/main_img.jpg"

function Main(){
    return (
        <div className="container">
            <div className="container-main">
                <div className="left-column">
                    <div className="nombre">
                        <div className="nombre">
                        {datos["datos-personales"].nombre}
                        </div>
                        <div className="apellido">
                        {datos["datos-personales"].apellidos}
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="imagen">
                        <img src={imagen} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
