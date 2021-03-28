import React from 'react'
import './Projects.css'
import Temp from '../../../assets/temp.jpg';

function Projects() {
    return (
        <section className="projects-list">
            <section className="projects-title">My Projects</section>
            
            <section className="projects-container">
            <a href="#top">
            <img className="tempImgOne" src={Temp} alt="temp"></img>
            </a>

            <a href="#top">
            <img className="tempImgTwo" src={Temp} alt="temp"></img>
            </a>

            <a href="#top">
            <img className="tempImgThree" src={Temp} alt="temp"></img>
            </a>

            <a href="#top">
            <img className="tempImgFour" src={Temp} alt="temp"></img>
            </a>

            </section>
        </section>
    )
}

export default Projects
