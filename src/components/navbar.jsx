import react, { useEffect, useRef } from "react";
import '../styles/navbar.css'

function Navbar(props) {
    
    const navbarRef = useRef(null);


    const homeLocation = props.homeLocation;
    const aboutLocation = props.aboutLocation;
    const projectLocation = props.projectLocation;
    const contactLocation = props.contactLocation;


    return (
        <div className="header" ref = {navbarRef}>
            <li className="logo">Bhumir.</li>
            <ul id = "click">
                <li className = "homeNav" style={{color: '#6246ea'}}><a href="#landing">Home</a></li>
                <li className="aboutNav"><a href="#About">About</a></li>
                <li className="projectNav"><a href="#Project">Project</a></li>
                <li className="contactNav"><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;