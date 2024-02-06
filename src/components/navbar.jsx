import react, { useEffect, useRef } from "react";
import '../styles/navbar.css'

function Navbar(homeLocation) {
    
    const navbarRef = useRef(null);


    window.addEventListener('scroll', () => {
        if (navbarRef.current) {
            const rect = navbarRef.current.getBoundingClientRect();
            const top = rect.top;
            if(top > homeLocation.homeLocation) {
                var logoElement = document.querySelector('.logo');
                logoElement.style.display = 'flex';
            } else {
                var logoElement = document.querySelector('.logo');
                logoElement.style.display = 'none';
            }

        }
    });
    
    return (
        <div className="header" ref = {navbarRef}>
            <li className="logo" style={{display: 'none'}} >Bhumir.</li>
            <ul>
                <li>Home</li>
                <li>Education</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;