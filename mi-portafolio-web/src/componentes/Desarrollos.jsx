import React, { useRef, useEffect } from "react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import data from "./proyectos.json";
import CardProject from "./Card_proyect";

function Desarrollo() {
    const proyectos = Object.entries(data.proyectos);
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        // Intervalo que mueve el scroll
        const interval = setInterval(() => {
            if (scrollContainer) {
                // Si llega al final, mueve al inicio para continuar
                if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                    scrollContainer.scrollLeft = scrollContainer.scrollWidth; // Se mueve al final
                } else {
                    scrollContainer.scrollLeft += 1; // Desplaza el scroll hacia la derecha
                }
            }
        }, 20);

        return () => clearInterval(interval); // Limpieza al desmontar el componente
    }, []);

    return (
        <div className="container-dev overflow-x-auto scroll-horizontal">
            <div className="container-slider" ref={scrollRef}>
                <ScrollMenu>
                    {proyectos.map(([nombre, detalles], index) => (
                        <CardProject 
                            key={`${nombre}-${index}`}
                            itemID={`${nombre}-${index}`}
                            titulo={nombre}
                            img={detalles.Imagen}
                            descripcion={detalles.Descripcion}
                            link={detalles.Link}
                        />
                    ))}
                </ScrollMenu>
            </div>
        </div>
    );
}

export default Desarrollo;
