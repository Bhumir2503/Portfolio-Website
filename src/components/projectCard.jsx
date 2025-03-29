import { useState } from "react";
import "../styles/projectCard.css";

function ProjectCard({ title, description, bgColor, icon, skills, link }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`project-card ${isHovered ? "hovered" : ""}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="project-visual" style={{ background: bgColor }}>
				<span className="project-icon">{icon}</span>

				<div className="project-overlay">
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="project-link"
						aria-label={`View ${title} project`}
					>
						<span>View Project</span>
						<svg
							className="arrow-icon"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</a>
				</div>
			</div>

			<div className="project-content">
				<h3 className="project-title">{title}</h3>

				<p className="project-description">
					{description.length > 150
						? `${description.substring(0, 150)}...`
						: description}
				</p>

				<div className="project-skills">
					{skills.slice(0, 4).map((skill, index) => (
						<span key={index} className="skill-tag">
							{skill}
						</span>
					))}
					{skills.length > 4 && (
						<span className="skill-tag more-skills">
							+{skills.length - 4}
						</span>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
