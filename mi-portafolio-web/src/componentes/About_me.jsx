import React from "react";
import imagen from "../assets/me_img.jpg"
import data from "./nav-var.json"
import ListaItem from "./lista_item"
import info from "./informacion.json"

function About_me(){
    return(
        <div className="container-about">
            <div className="foto categoria">
                <div className="foto-borde">
                    <img className="foto-img" src={imagen} alt="" />
                </div>
            </div>
            <div className="me categoria">
                <div className="titulo-categoria">
                    <span className="categoria_about">Sobre mí</span><br/>
                </div>
                {info.about_me.map((item, index) =>(
                    <React.Fragment key={index}>
                        {item}<br /><br />
                    </React.Fragment>
                ))}
            </div>
            <div className="soft-skills categoria">
                <div className="titulo-categoria">
                    <span className="categoria_about">Soft Skills</span><br/>
                </div>
                <div className="conocimientos-lista">
                    <ul className="lista">
                        {data.soft_skills.map((item) =>(
                            <ListaItem
                            item_list={item}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <div className="hard-skills categoria">          
                <div className="titulo-categoria">
                    <span className="categoria_about">Hard Skills</span><br/>
                </div>
                <div className="conocimientos-lista">
                    <ul className="lista">
                    {data.hard_skills.map((item) =>(
                            <ListaItem
                            item_list={item}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
    
}

export default About_me;