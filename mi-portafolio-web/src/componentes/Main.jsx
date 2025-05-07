import React, { useEffect, useState } from "react";
import datos from "./nav-var.json";
import imagen from "../assets/main_img.jpg";

function Main() {
  const textos = datos["datos-personales"].informacion;
  const [index, setIndex] = useState(0); // índice del texto actual
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0); // índice del carácter actual
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textos[index];

    const typeSpeed = isDeleting ? 150 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 2000); // espera antes de borrar
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % textos.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, textos]);

  return (
    <div className="container-main-flex">
      <div className="container-main">
        <div className="left-column">
          <div className="nombre">
            <div className="nombre">
              {datos["datos-personales"].nombre}
            </div>
            <div className="apellido">
              {datos["datos-personales"].apellidos}
            </div>
            <div className="informacion">
              <span className="typed-text">{displayText}</span>
              <span className="cursor">|</span>
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
