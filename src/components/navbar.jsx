import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar({ activeSection }) {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<header className={`header ${scrolled ? "scrolled" : ""}`}>
			<a href="#home" className="logo">
				Bhumir<span className="logo-dot">.</span>
			</a>

			<button
				className="mobile-menu-btn"
				onClick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				<i
					className={`icon ${
						mobileMenuOpen ? "icon-close" : "icon-menu"
					}`}
				></i>
			</button>

			<nav className={`desktop-nav`}>
				<ul>
					<li>
						<a
							href="#home"
							className={activeSection === "home" ? "active" : ""}
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#about"
							className={
								activeSection === "about" ? "active" : ""
							}
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className={
								activeSection === "projects" ? "active" : ""
							}
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className={`contact-btn ${
								activeSection === "contact" ? "active" : ""
							}`}
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>

			<div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
				<ul>
					<li style={{ transitionDelay: "0.1s" }}>
						<a
							href="#home"
							onClick={closeMobileMenu}
							className={activeSection === "home" ? "active" : ""}
						>
							Home
						</a>
					</li>
					<li style={{ transitionDelay: "0.2s" }}>
						<a
							href="#about"
							onClick={closeMobileMenu}
							className={
								activeSection === "about" ? "active" : ""
							}
						>
							About
						</a>
					</li>
					<li style={{ transitionDelay: "0.3s" }}>
						<a
							href="#projects"
							onClick={closeMobileMenu}
							className={
								activeSection === "projects" ? "active" : ""
							}
						>
							Projects
						</a>
					</li>
					<li style={{ transitionDelay: "0.4s" }}>
						<a
							href="#contact"
							onClick={closeMobileMenu}
							className={
								activeSection === "contact" ? "active" : ""
							}
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Navbar;
