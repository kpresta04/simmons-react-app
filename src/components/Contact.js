import React from "react";
import { Link } from "react-router-dom";

const Contact = () => (
	<div className="main">
		<div id="contact">
			<h3>Hours of Operation</h3>
			<ul>
				<li>Monday – Friday: 9 a.m. – 5:00 p.m. CST</li>
				<li>Saturday: 9:-00 a.m. – 1:00 p.m. CST</li>
			</ul>
			<h3>Drop Us A Line</h3>
			<p>
				To get a free quote on a repair or for any other inquiry give us a call
				at 913-782-3131, or send us an email with the form below.{" "}
			</p>

			<form
				id="contactForm"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input type="text" placeholder="NAME" />
				<input type="email" placeholder="EMAIL" required=" " />
				<textarea
					placeholder="YOUR MESSAGE"
					cols="30"
					rows="10"
					required=" "
				></textarea>
				<button id="sendBtn">Send </button>
			</form>
			<button className="back-button">
				<Link to="/">Back To Simmons</Link>
			</button>
		</div>
	</div>
);

export default Contact;
