import react from "react";
import '../styles/navbar.css'

function Navbar(homeLocation) {

    return (
        <div className="header">
            <li className="logo">Bhumir.</li>
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