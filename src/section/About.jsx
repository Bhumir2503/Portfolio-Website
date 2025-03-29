import { useEffect, useRef } from "react";
import "../styles/about.css";

function About() {
	const sectionRef = useRef(null);

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1,
		};

		const handleIntersect = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			});
		};

		const observer = new IntersectionObserver(
			handleIntersect,
			observerOptions
		);

		if (sectionRef.current) {
			const animatedElements =
				sectionRef.current.querySelectorAll(".animate");
			animatedElements.forEach((el) => observer.observe(el));
		}

		return () => {
			if (sectionRef.current) {
				const animatedElements =
					sectionRef.current.querySelectorAll(".animate");
				animatedElements.forEach((el) => observer.unobserve(el));
			}
		};
	}, []);

	return (
		<section id="about" className="about" ref={sectionRef}>
			<div className="container about-container">
				<div className="section-header animate">
					<h2 className="section-title">About Me</h2>
					<div className="section-subtitle">
						My journey and passion
					</div>
				</div>

				<div className="about-content">
					<div className="about-text animate">
						<p className="about-paragraph">
							I'm deeply passionate about technology and
							innovation, a flame that was first ignited in high
							school during a transformative computer science
							class. Coding felt like deciphering a secret
							language, and the late-night sessions of tinkering
							with programs and debugging fueled my insatiable
							curiosity. The satisfaction of seeing everything
							fall into place marked the beginning of a journey
							where computer science evolved from a mere hobby to
							a fundamental cornerstone of my life.
						</p>

						<p className="about-paragraph animate">
							Building on this foundation, my academic journey led
							me to the University of Tennessee, Knoxville, where
							I pursued a major in Computer Science. Alongside, I
							delved into the intricacies of mathematics with a
							minor and explored the captivating world of machine
							learning. This educational pursuit allowed me to
							uncover the dynamic intersections between
							mathematical principles and cutting-edge technology,
							solidifying my technical prowess and igniting a
							fervor for continual exploration and innovation
							within the ever-evolving landscape of computer
							science.
						</p>

						<p className="about-paragraph animate">
							As a seasoned full stack developer, I bring to the
							table a diverse skill set honed through hands-on
							experience and a commitment to lifelong learning. My
							journey is one of continuous growth, fueled by an
							unwavering enthusiasm for the limitless
							possibilities that technology presents. I am eager
							to contribute my skills and insights to the dynamic
							and innovative landscape of the tech industry, ready
							to take on new challenges and make meaningful
							contributions in this ever-evolving field.
						</p>
					</div>

					<div className="about-skills animate">
						<h3 className="skills-title">Technical Skills</h3>

						<div className="skills-grid">
							<div className="skill-category">
								<h4 className="category-title">Frontend</h4>
								<ul className="skills-list">
									<li>React / React Native</li>
									<li>JavaScript / TypeScript</li>
									<li>HTML5 / CSS3</li>
									<li>Redux</li>
									<li>Responsive Design</li>
								</ul>
							</div>

							<div className="skill-category">
								<h4 className="category-title">Backend</h4>
								<ul className="skills-list">
									<li>Node.js / Express</li>
									<li>Python</li>
									<li>C++</li>
									<li>RESTful APIs</li>
									<li>GraphQL</li>
								</ul>
							</div>

							<div className="skill-category">
								<h4 className="category-title">Database</h4>
								<ul className="skills-list">
									<li>MongoDB</li>
									<li>SQL / PostgreSQL</li>
									<li>Firebase</li>
									<li>Data Modeling</li>
								</ul>
							</div>

							<div className="skill-category">
								<h4 className="category-title">
									Tools & Others
								</h4>
								<ul className="skills-list">
									<li>Git / GitHub</li>
									<li>Docker</li>
									<li>CI/CD</li>
									<li>Agile / Scrum</li>
									<li>Machine Learning</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
