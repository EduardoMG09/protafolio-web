import React  from 'react'
import './index.css'
import Header from './componentes/Header'
import Main from './componentes/Main'
import About from './componentes/About_me'
import Proyecto from './componentes/Proyectos'
import Desarrollo from './componentes/Desarrollos'
import Hobbies from './componentes/Hobbie'
import Contacto from './componentes/Contacto'
import Titulo from './componentes/Seccion'
import Dat from './componentes/web-secciones.json'

function App() {
  return (
    <div>
      <Header  />
      <div className='container'>
        <Main/>
      </div>
      <div className='center-container'>
        <About />
      </div>
      <div className="center-container">
        <Titulo
        titulo={Dat.seccion[0]}
        />
      </div>
      <div className="container-cards">
        <Proyecto />
      </div>
      <div className="center-container">
        <Titulo
        titulo={Dat.seccion[1]}
        />
      </div>
      <div className="desarrollo-container">
        <Desarrollo />
      </div>
      <div className="hobbies-container">
        <Hobbies />
      </div>
      <div className="contacto-container">
        <Contacto />
      </div>
    </div>   
  );
}

export default App
