import { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/project.css";

function Projects() {
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

	// Background colors for project cards without images
	const bgColors = [
		"linear-gradient(135deg, #6246ea 0%, #9f80ff 100%)",
		"linear-gradient(135deg, #0dd3a3 0%, #2ae7b6 100%)",
		"linear-gradient(135deg, #ff6492 0%, #ff85ab 100%)",
		"linear-gradient(135deg, #4a66fd 0%, #6e85ff 100%)",
		"linear-gradient(135deg, #a17df9 0%, #c5a8ff 100%)",
		"linear-gradient(135deg, #ff9966 0%, #ffbb99 100%)",
	];

	const projects = [
		{
			id: 0,
			title: "Exerkin",
			description:
				"A comprehensive workout tracking application built with React Native and Firebase. Features include personalized workout plans, progress tracking with visual charts, exercise library with proper form guides, and social sharing capabilities. The app utilizes Firebase Authentication for secure user management and Firestore for real-time data synchronization across devices.",
			bgColor: bgColors[0],
			icon: "💪",
			skills: [
				"React Native",
				"Firebase",
				"JavaScript",
				"Firestore",
				"Authentication",
				"Redux",
				"Expo",
				"Cloud Functions",
			],
			link: "https://github.com/bhumir2503/Exerkin",
			featured: true,
			delay: 0,
		},
		{
			id: 1,
			title: "Portfolio Website",
			description:
				"My personal portfolio website showcasing my projects and skills. Built with React and Vite for lightning-fast performance. Features a responsive dark theme design, smooth animations, and interactive elements. The site includes intersection observers for scroll animations, custom CSS with modern design principles, and optimized asset loading.",
			bgColor: bgColors[1],
			icon: "🌐",
			skills: [
				"React",
				"Vite",
				"JavaScript",
				"CSS",
				"Responsive Design",
				"UI/UX Design",
				"Web Animation",
				"Dark Theme",
			],
			link: "https://github.com/Bhumir2503/Website-Resume-V3",
			delay: 0.1,
		},
		{
			id: 2,
			title: "Maze Generator and Solver",
			description:
				"Innovative application designed to provide users with an immersive and challenging experience. Leveraging Prim's Algorithm, the application generates a variety of maze structures, ensuring each exploration is unique. Additionally, advanced maze-solving capabilities are integrated, featuring algorithms such as Dijkstra's, Depth First Search, and Breadth First Search.",
			bgColor: bgColors[2],
			icon: "🧩",
			skills: ["Python", "C++", "Pygame", "SDL", "Algorithm"],
			link: "https://github.com/Bhumir2503/Maze-Gen-Solver",
			delay: 0.2,
		},
		{
			id: 3,
			title: "Sudoku Solver",
			description:
				"Pygame application meticulously developed to tackle the challenge of generating and solving Sudoku puzzles. With a keen focus on user engagement, the application boasts a user-friendly interface designed to captivate players and immerse them in the intricacies of Sudoku puzzle-solving. Leveraging sophisticated algorithms, the solver generates unique puzzles and offers efficient solutions.",
			bgColor: bgColors[3],
			icon: "🔢",
			skills: ["Python", "Advanced Mathematics", "Algorithm", "Pygame"],
			link: "https://github.com/Bhumir2503/Sudoku",
			delay: 0.3,
		},
	];

	// Separate featured project from regular projects
	const featuredProject = projects.find((project) => project.featured);
	const regularProjects = projects.filter((project) => !project.featured);

	return (
		<section id="projects" className="projects" ref={sectionRef}>
			<div className="dots-pattern"></div>
			<div className="projects-container">
				<div className="projects-header animate">
					<h2 className="projects-title">Projects</h2>
					<div className="projects-subtitle">
						A collection of my recent work and personal projects
						showcasing my skills and passion for development
					</div>
				</div>

				{featuredProject && (
					<div className="featured-project animate">
						<div className="featured-project-badge">
							Ongoing
						</div>
						<div
							className="featured-project-visual"
							style={{ background: featuredProject.bgColor }}
						>
							<span className="featured-project-icon">
								{featuredProject.icon}
							</span>
						</div>

						<div className="featured-project-content">
							<h3 className="featured-project-title">
								{featuredProject.title}
							</h3>
							<p className="featured-project-description">
								{featuredProject.description}
							</p>
							<div className="featured-project-meta">
								<div className="featured-project-skills">
									{featuredProject.skills.map(
										(skill, index) => (
											<span
												key={index}
												className="featured-skill-tag"
											>
												{skill}
											</span>
										)
									)}
								</div>
								<a
									href={featuredProject.link}
									target="_blank"
									rel="noopener noreferrer"
									className="featured-project-link"
								>
									View Project
									<span className="featured-project-link-icon">
										→
									</span>
								</a>
							</div>
						</div>
					</div>
				)}

				<div className="projects-grid">
					{regularProjects.map((project) => (
						<div
							key={project.id}
							className="animate"
							style={{ transitionDelay: `${project.delay}s` }}
						>
							<ProjectCard
								title={project.title}
								description={project.description}
								bgColor={project.bgColor}
								icon={project.icon}
								skills={project.skills}
								link={project.link}
							/>
						</div>
					))}
				</div>

				<div className="projects-cta animate">
					<a
						href="https://github.com/Bhumir2503"
						target="_blank"
						rel="noopener noreferrer"
						className="view-more-button"
					>
						<span>View More on GitHub</span>
						<svg
							className="github-icon"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Projects;
