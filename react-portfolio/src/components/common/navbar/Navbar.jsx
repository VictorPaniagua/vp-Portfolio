import React from "react";
import "./Navbar.css";

function Navbar () {
    return(
     <section>
         <a href="./header" className="Home">Home</a>
         <a href="/" className="Home">About</a>
         <a href="/" className="Home">Projects</a>
         <a href="/" className="Home">Contact</a>
     </section>
    )
}

export default Navbar;