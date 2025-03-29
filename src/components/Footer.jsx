import "../styles/Footer.css";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="container footer-container">
				{/* <div className="footer-content">
					<div className="footer-logo">
						<h3>
							Bhumir<span className="logo-dot">.</span>
						</h3>
						<p className="footer-tagline">Full Stack Developer</p>
					</div>

					<div className="footer-links">
						<div className="footer-links-column">
							<h4>Navigation</h4>
							<ul>
								<li>
									<a href="#home">Home</a>
								</li>
								<li>
									<a href="#about">About</a>
								</li>
								<li>
									<a href="#projects">Projects</a>
								</li>
								<li>
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</div>

						<div className="footer-links-column">
							<h4>Connect</h4>
							<ul>
								<li>
									<a
										href="https://github.com/bhumir2503"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>
								</li>
								<li>
									<a
										href="https://linkedin.com/in/bhumir-patel"
										target="_blank"
										rel="noopener noreferrer"
									>
										LinkedIn
									</a>
								</li>
								<li>
									<a
										href="https://discordapp.com/users/418762004849754112"
										target="_blank"
										rel="noopener noreferrer"
									>
										Discord
									</a>
								</li>
								<li>
									<a href="mailto:Bhumir2503@gmail.com">
										Email
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div> */}

				<div className="footer-bottom">
					<p className="copyright">
						&copy; {currentYear} Bhumir Patel. All rights reserved.
					</p>

					<div className="back-to-top">
						<a href="#home" aria-label="Back to top">
							<i className="arrow-up-icon"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
