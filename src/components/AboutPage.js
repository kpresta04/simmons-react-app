import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
	return (
		<div className="main">
			<div className="about">
				<div className="banner">
					<h1>About Us</h1>
					<img
						className="bannerImage"
						src="./images/gunsCrossed.webp"
						alt="Guns Crossed"
					></img>
				</div>

				<div>
					<img
						className="smallImage"
						src="./images/Ernie.s-3-280x280.webp"
						alt="Ernie 'Pop' Simmons"
					></img>
				</div>

				<p>
					Ernie “Pop” Simmons started a gun repair shop in 1945. Two years later
					he invented and patented the Simmons “Floating” Vent Rib for shotguns
					to improve the aim of all types of sportsmen. Over 70 years later,
					Simmons is still installing vent ribs and trying to improve your
					firearms performance in any way we can.
				</p>
				<h3>Location</h3>
				<iframe
					className="map"
					title="Simmons Location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.1512607969903!2d-94.79501588465031!3d38.874780979574126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0be168ec1e459%3A0x8d9751a4f3f505d8!2sSimmons%20Gun%20Repair%20%26%20Sales!5e0!3m2!1sen!2sus!4v1586277948017!5m2!1sen!2sus"
					frameBorder="0"
					allowFullScreen=""
					aria-hidden="false"
					tabIndex="0"
				></iframe>
				<h3>Our Team</h3>

				<div id="staffContainer">
					<div className="staffBlock">
						<h5>Terry Presta</h5>
						<h6>General Manager</h6>
					</div>

					<div className="staffBlock">
						<h5>Jesika Calahan</h5>
						<h6>Assistant Manager</h6>
					</div>
					<div className="staffBlock">
						<h5>John Tippin</h5>
						<h6>Craftsman</h6>
					</div>
					<div className="staffBlock">
						<h5>Jim Clark</h5>
						<h6>Craftsman</h6>
					</div>
				</div>
				<button className="back-button">
					<Link to="/">Back To Simmons</Link>
				</button>
			</div>
		</div>
	);
};

export default AboutPage;
