import React  from 'react'
import './index.css'
import Header from './componentes/Header'
import Main from './componentes/Main'
import About from './componentes/About_me'
import Proyecto from './componentes/Proyectos'
import Desarrollo from './componentes/Desarrollos'

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
      <div className="container-cards">
        <Proyecto />
      </div>
      <div className="desarrollo-container">
        <Desarrollo />
      </div>
    </div>   
  );
}

export default App
