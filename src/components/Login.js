import React from "react";

const Login = () => (
	<div className="main">
		<div className="logIn">
			<h3>Log In To Your Account</h3>
			<h5>Don't have an account? Sign Up</h5>

			<form
				id="contactForm"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input type="text" placeholder="Username" required=" " />
				<input type="password" placeholder="Password" required=" " />
				<input type="checkbox" id="rememberPW" name="rememberPW" />
				<label htmlFor="rememberPW" id="rememberLabel">
					Remember me
				</label>
				<button id="sendBtn">Log In </button>
				<h4>If you've forgotten your password, click here to reset it.</h4>
			</form>
		</div>
	</div>
);

export default Login;
