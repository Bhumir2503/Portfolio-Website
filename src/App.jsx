import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Landing from "./section/Landing";
import About from "./section/About";
import Projects from "./section/Project";
import Contact from "./section/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	const [activeSection, setActiveSection] = useState("home");
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolling(true);

			// Get positions of sections
			const homeSection = document
				.getElementById("home")
				.getBoundingClientRect();
			const aboutSection = document
				.getElementById("about")
				.getBoundingClientRect();
			const projectsSection = document
				.getElementById("projects")
				.getBoundingClientRect();
			const contactSection = document
				.getElementById("contact")
				.getBoundingClientRect();

			// Set active section based on position
			if (homeSection.top <= 100 && homeSection.bottom >= 100) {
				setActiveSection("home");
			} else if (aboutSection.top <= 100 && aboutSection.bottom >= 100) {
				setActiveSection("about");
			} else if (
				projectsSection.top <= 100 &&
				projectsSection.bottom >= 100
			) {
				setActiveSection("projects");
			} else if (
				contactSection.top <= 100 &&
				contactSection.bottom >= 100
			) {
				setActiveSection("contact");
			}

			// Reset scrolling state after delay
			clearTimeout(window.scrollTimeout);
			window.scrollTimeout = setTimeout(() => {
				setIsScrolling(false);
			}, 150);
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up
		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(window.scrollTimeout);
		};
	}, []);

	return (
		<div className="app">
			<Navbar activeSection={activeSection} />
			<main>
				<Landing />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
