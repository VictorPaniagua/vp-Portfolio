import React from "react";
import "./Navbar.css";

function Navbar () {
    return(
     <section className="navbar-links">
         <a href="#top" className="home-link">Home</a>
         <a href="./skills" className="skills-link">Skills</a>
         <a href="./projects" className="projects-link">Projects</a>
         <a href="./contact" className="contact-link">Contact</a>
     </section>
    )
}

export default Navbar;