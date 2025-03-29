import { useEffect, useRef } from "react";
import "../styles/landing.css";

function Landing() {
	const landingRef = useRef(null);
	const headingRef = useRef(null);
	const subtitleRef = useRef(null);
	const descriptionRef = useRef(null);
	const ctaRef = useRef(null);
	const imageRef = useRef(null);

	useEffect(() => {
		// Animation on load
		const elements = [
			headingRef.current,
			subtitleRef.current,
			descriptionRef.current,
			ctaRef.current,
			imageRef.current,
		];

		elements.forEach((el, index) => {
			if (el) {
				setTimeout(() => {
					el.classList.add("visible");
				}, 200 * index);
			}
		});
	}, []);

	return (
		<section id="home" className="landing" ref={landingRef}>
			<div className="landing-background">
				<div className="shape shape-1"></div>
				<div className="shape shape-2"></div>
				<div className="shape shape-3"></div>
				<div className="shape shape-4"></div>
			</div>

			<div className="container landing-container">
				<div className="landing-content">
					<h1 ref={headingRef} className="landing-heading">
						<span className="text-gradient">Bhumir Patel</span>
					</h1>

					<h2 ref={subtitleRef} className="landing-subtitle">
						Full Stack Developer
					</h2>

					<p ref={descriptionRef} className="landing-description">
						I craft <span className="highlight">elegant</span>{" "}
						designs and write{" "}
						<span className="highlight">clean</span>,{" "}
						<span className="highlight">efficient</span> code, all
						while enjoying every moment of it.
					</p>

					<div ref={ctaRef} className="landing-cta">
						<a
							href="Resume.pdf"
							download="Bhumir_Patel"
							className="primary-button"
						>
							<span>Download Resume</span>
							<i className="download-icon"></i>
						</a>

						<a href="#projects" className="secondary-button">
							<span>View Projects</span>
							<i className="arrow-icon"></i>
						</a>
					</div>
				</div>

				<div className="landing-image" ref={imageRef}>
					<div className="image-wrapper">
						<img src="Bhumir.svg" alt="Bhumir Patel" />
					</div>
				</div>
			</div>

			<div className="scroll-indicator">
				<div className="scroll-indicator-text">Scroll Down</div>
				<div className="scroll-indicator-line"></div>
			</div>
		</section>
	);
}

export default Landing;
