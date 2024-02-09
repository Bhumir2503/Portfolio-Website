import react, { useEffect, useRef } from "react";
import '../styles/navbar.css'

function Navbar(props) {
    
    const navbarRef = useRef(null);

    console.log(props);

    const homeLocation = props.homeLocation;
    const aboutLocation = props.aboutLocation;
    const projectLocation = props.projectLocation;
    const contactLocation = props.contactLocation;



    window.addEventListener('scroll', () => {
        if (navbarRef.current) {
            const rect = navbarRef.current.getBoundingClientRect();
            const bottom = rect.bottom;
            console.log(bottom);
            console.log(homeLocation, aboutLocation, projectLocation, contactLocation, bottom)

            if(homeLocation < bottom && bottom <= aboutLocation){
                document.querySelector('.homeNav').style.color = '#6246ea';
                document.querySelector('.aboutNav').style.color = 'black';
                document.querySelector('.projectNav').style.color = 'black';
                document.querySelector('.contactNav').style.color = 'black';
            }else if(aboutLocation < bottom && bottom <= projectLocation){
                document.querySelector('.homeNav').style.color = 'black';
                document.querySelector('.aboutNav').style.color = '#6246ea';
                document.querySelector('.projectNav').style.color = 'black';
                document.querySelector('.contactNav').style.color = 'black';
            }else if(projectLocation < bottom && bottom <= contactLocation){
                document.querySelector('.homeNav').style.color = 'black';
                document.querySelector('.aboutNav').style.color = 'black';
                document.querySelector('.projectNav').style.color = '#6246ea';
                document.querySelector('.contactNav').style.color = 'black';
            }else{
                document.querySelector('.homeNav').style.color = 'black';
                document.querySelector('.aboutNav').style.color = 'black';
                document.querySelector('.projectNav').style.color = 'black';
                document.querySelector('.contactNav').style.color = '#6246ea';
            }


        }
    });
    
    return (
        <div className="header" ref = {navbarRef}>
            <li className="logo">Bhumir.</li>
            <ul>
                <li className = "homeNav" style={{color: '#6246ea'}}><a>Home</a></li>
                <li className="aboutNav" style= {{color: '#2b2c34'}}><a href="">About</a></li>
                <li className="projectNav" style= {{color: '#2b2c34'}}><a href="">Project</a></li>
                <li className="contactNav" style= {{color: '#2b2c34'}}><a href="">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navbar;