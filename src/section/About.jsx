import { useEffect, useRef } from "react";
import "../styles/About.css";

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

	// Define skills with proficiency levels (1-5)
	const skills = {
		frontend: [
			{ name: "React", level: 5 },
			{ name: "React Native", level: 4 },
			{ name: "JavaScript", level: 5 },
			{ name: "TypeScript", level: 4 },
			{ name: "HTML5/CSS3", level: 5 },
			{ name: "Redux", level: 4 },
			{ name: "Next.js", level: 3 },
			{ name: "Tailwind CSS", level: 4 },
		],
		backend: [
			{ name: "Node.js", level: 4 },
			{ name: "Express", level: 4 },
			{ name: "MongoDB", level: 3 },
			{ name: "Firebase", level: 4 },
			{ name: "REST APIs", level: 5 },
			{ name: "GraphQL", level: 3 },
			{ name: "Authentication", level: 4 },
		],
		tools: [
			{ name: "Git & GitHub", level: 5 },
			{ name: "VS Code", level: 5 },
			{ name: "Jest/Testing", level: 3 },
			{ name: "Docker", level: 3 },
			{ name: "CI/CD", level: 3 },
			{ name: "Agile/Scrum", level: 4 },
			{ name: "npm/yarn", level: 5 },
		],
	};

	return (
		<section id="about" className="about" ref={sectionRef}>
			<div className="container about-container">
				<div className="section-header animate">
					<h2 className="section-title">About Me</h2>
					<div className="section-subtitle">
						Full Stack Developer focused on modern web & mobile
						solutions
					</div>
				</div>

				<div className="about-content">
					<div className="about-text animate">
						<p className="about-paragraph">
							I'm a passionate{" "}
							<span className="highlight">
								Full Stack Developer
							</span>{" "}
							with a strong focus on creating responsive web
							applications and cross-platform mobile solutions. My
							journey in tech began during my computer science
							studies at the University of Tennessee, where I
							discovered my love for building intuitive and
							efficient digital experiences.
						</p>

						<p className="about-paragraph animate">
							Specializing in modern JavaScript frameworks like{" "}
							<span className="highlight">React</span>,{" "}
							<span className="highlight">React Native</span>, and{" "}
							<span className="highlight">Node.js</span>, I enjoy
							crafting seamless applications that work flawlessly
							across all devices. I'm particularly interested in
							performance optimization, clean architecture, and
							implementing responsive designs that provide
							exceptional user experiences.
						</p>

						<p className="about-paragraph animate">
							My experience includes building RESTful APIs,
							integrating third-party services, implementing
							authentication systems, and working with various
							databases. I'm always eager to learn new
							technologies and stay current with industry best
							practices, making me adaptable to the ever-evolving
							tech landscape.
						</p>
					</div>

					<div className="about-skills animate">
						<h3 className="skills-title">Technical Skills</h3>

						<div className="skills-container">
							<div className="frontend-category skills-category">
								<h4>Frontend Development</h4>
								<div className="skills-list">
									{skills.frontend.map((skill, index) => (
										<div className="skill-item" key={index}>
											<div className="skill-header">
												<span className="skill-name">
													{skill.name}
												</span>
												<div className="skill-level">
													{[...Array(5)].map(
														(_, i) => (
															<div
																key={i}
																className={`level-dot ${
																	i <
																	skill.level
																		? "active"
																		: ""
																}`}
															></div>
														)
													)}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="secondary-skills">
								<div className="backend-category skills-category">
									<h4>Backend Development</h4>
									<div className="skills-list">
										{skills.backend.map((skill, index) => (
											<div
												className="skill-item"
												key={index}
											>
												<div className="skill-header">
													<span className="skill-name">
														{skill.name}
													</span>
													<div className="skill-level">
														{[...Array(5)].map(
															(_, i) => (
																<div
																	key={i}
																	className={`level-dot ${
																		i <
																		skill.level
																			? "active"
																			: ""
																	}`}
																></div>
															)
														)}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>

								<div className="tools-category skills-category">
									<h4>Tools & Workflow</h4>
									<div className="skills-list">
										{skills.tools.map((skill, index) => (
											<div
												className="skill-item"
												key={index}
											>
												<div className="skill-header">
													<span className="skill-name">
														{skill.name}
													</span>
													<div className="skill-level">
														{[...Array(5)].map(
															(_, i) => (
																<div
																	key={i}
																	className={`level-dot ${
																		i <
																		skill.level
																			? "active"
																			: ""
																	}`}
																></div>
															)
														)}
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
