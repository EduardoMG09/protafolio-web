import React from "react";
import Data from "./logos_card.json" 
import Card from "./Card";

function Proyecto(){
    const logosArray = Object.values(Data.logos);

    return (
        <div className="cards">
            {logosArray.map((lenguaje, index) =>(
                <Card
                key={index}
                title={lenguaje}
                />
            ))}
        </div>
    );

}

export default Proyecto;