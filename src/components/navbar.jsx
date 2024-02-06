import react, { useEffect, useRef } from "react";
import '../styles/navbar.css'

function Navbar(homeLocation, aboutLocation, projectLocation) {
    
    const navbarRef = useRef(null);



    window.addEventListener('scroll', () => {
        if (navbarRef.current) {
            const rect = navbarRef.current.getBoundingClientRect();
            const bottom = rect.bottom;
        }
    });
    
    return (
        <div className="header" ref = {navbarRef}>
            <li className="logo">Bhumir.</li>
            <ul>
                <li className = "homeNav" style={{color: '#6246ea'}}>Home</li>
                <li className="aboutNav"><a href="">About</a></li>
                <li className="projectNav">Project</li>
                <li className="contactNav">Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;