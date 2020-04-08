import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
	<div>
		<footer className="footer">
			<p>Copyright 2020 © Simmons Gun Repair</p>
			<Link to="/privacy">Privacy Policy</Link>
		</footer>
	</div>
);

export default Footer;
