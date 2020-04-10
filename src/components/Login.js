import React from "react";
import { signInWithGoogle, signInWithEmail } from "../firebase/firebase.utils";

const Login = () => {
	const getEmailValue = () => document.querySelector("#email-field").value;

	return (
		<div className="main">
			<div className="logIn">
				<h3>Log In To Your Account</h3>
				{/* <h5>Don't have an account? Sign Up</h5> */}
				<div id="contactForm">
					<form
						onSubmit={(e) => {
							e.preventDefault();

							signInWithEmail(getEmailValue());
						}}
					>
						<input
							id="email-field"
							type="email"
							placeholder="Email"
							required=" "
						/>
						{/* <input type="password" placeholder="Password" required=" " /> */}
						{/* <input type="checkbox" id="rememberPW" name="rememberPW" />
				<label htmlFor="rememberPW" id="rememberLabel">
					Remember me
				</label> */}
						<button id="email-button" className="custom-button sign-in-buttons">
							Sign In With Email
						</button>
					</form>
					<button
						id="googleSignInButton"
						className="custom-button sign-in-buttons"
						onClick={signInWithGoogle}
					>
						<img
							className="provider-icon"
							src="./images/google.svg"
							alt="Google"
						></img>
						Sign In With Google
					</button>

					{/* <h4>If you've forgotten your password, click here to reset it.</h4> */}
				</div>
			</div>
		</div>
	);
};

export default Login;
