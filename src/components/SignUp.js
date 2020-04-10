import React from "react";

class SignUp extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="contactForm">
				<h3>Or Sign Up</h3>

				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<input type="email" placeholder="Email" required=" " />
					<input type="password" placeholder="Password" required=" " />
					<input type="password" placeholder="Confirm Password" required=" " />

					{/* <input type="checkbox" id="rememberPW" name="rememberPW" />
				<label htmlFor="rememberPW" id="rememberLabel">
					Remember me
				</label> */}
				</form>
				<div className="sign-in-button-div">
					<button className="custom-button sign-in-buttons">Sign Up</button>
					<button
						id="googleSignInButton"
						className="custom-button sign-in-buttons"
					>
						<img
							className="provider-icon"
							src="./images/google.svg"
							alt="Google"
						></img>
						Sign Up
					</button>
				</div>
			</div>
		);
	}
}

export default SignUp;
