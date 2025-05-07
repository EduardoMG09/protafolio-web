import React, { useRef, useEffect } from "react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Data from "./logos_card.json";
import Card from "./Card";
import Dat from "./web-secciones.json"

function Proyecto() {
    const logosArray = Object.entries(Data.logos);
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const interval = setInterval(() => {
            if (scrollContainer) {
                if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                    scrollContainer.scrollLeft = scrollContainer.scrollWidth;
                } else {
                    scrollContainer.scrollLeft += 1;
                }
            }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="cards overflow-x-auto scroll-horizontal">
            <div className="container-slider" ref={scrollRef}>
                <ScrollMenu>
                {logosArray.map(([nombre, detalles], index) => (
                    <Card
                    key={`${nombre}-${index}`}
                    itemID={`${nombre}-${index}`}
                    nombre={detalles.nombre}
                    icono={detalles.icono}
                    />
                ))}
                </ScrollMenu>
            </div>
        </div>
    );
}

export default Proyecto;