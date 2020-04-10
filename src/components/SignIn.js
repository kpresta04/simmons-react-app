import React from "react";
import { signInWithGoogle } from "../firebase/firebase.utils";

class SignIn extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="contactForm">
				<h3>Log In</h3>

				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<input type="email" placeholder="Email" required=" " />
					<input type="password" placeholder="Password" required=" " />

					{/* <input type="checkbox" id="rememberPW" name="rememberPW" />
				<label htmlFor="rememberPW" id="rememberLabel">
					Remember me
				</label> */}
				</form>
				<div className="sign-in-button-div">
					<button className="custom-button sign-in-buttons">Sign In</button>

					<button
						id="googleSignInButton"
						className="custom-button sign-in-buttons"
						onClick={() => signInWithGoogle()}
					>
						<img
							className="provider-icon"
							src="./images/google.svg"
							alt="Google"
						></img>
						Sign In
					</button>
				</div>
				<h4>If you've forgotten your password, click here to reset it.</h4>
			</div>
		);
	}
}

export default SignIn;
