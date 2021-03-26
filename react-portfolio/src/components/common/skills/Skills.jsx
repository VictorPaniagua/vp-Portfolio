import React from 'react';
import './Skills.css'

function Skills () {
    return (
        <section>
            <section className="skills-title">My Skills</section>

                <section className="skills-container">

                    <section className="skills-frontend">
                        <p>Front-End</p>
                        <li>React Sass Bootstrap Html Css</li>
                    </section>

                    <section className="skills-backend">
                        <p>Back-End</p>
                        <li>Node.js Javascript jQuery MongoDb</li>
                    </section>

                    <section className="skills-technology">
                        <p>Technology</p>
                        <li>Git Github</li>
                    </section>
                    {/* <div className="skills-list-react">React</div>
                    <div className="skills-list-node">Node.js</div>
                    <div className="skills-list-javascript">Javascript</div>
                    <div className="skills-list-bootstrap">Bootstap</div>
                    <div className="skills-list-jquery">jQuery</div>
                    <div className="skills-list-sass">Sass</div>
                    <div className="skills-list-mongo">MongoDb</div>
                    <div className="skills-list-github">Github</div>
                    <div className="skills-list-git">Git</div>
                    <div className="skills-list-html">Html</div>
                    <div className="skills-list-css">Css</div> */}
                </section>
        </section>
    )
    
}

export default Skills