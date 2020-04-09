import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
	<div>
		<footer className="footer">
			<p>
				Copyright 2020 © Simmons Gun Repair, LLC. All Rights Reserved.{" "}
				<Link to="/privacy">Privacy Policy</Link>
			</p>
		</footer>
	</div>
);

export default Footer;
