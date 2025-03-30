import "../styles/Footer.css";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
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
		</footer>
	);
}

export default Footer;
