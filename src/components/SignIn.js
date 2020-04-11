import React from "react";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			error: "",
		};
	}
	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};
	handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "", error: "" });
		} catch (error) {
			this.setState({ error: error.message });
		}
	};
	render = () => {
		return (
			<div className="contactForm">
				<h3>Log In</h3>

				<form
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							this.handleSubmit(e);
						}
					}}
				>
					<input
						type="email"
						name="email"
						onChange={this.handleChange}
						label="email"
						value={this.state.email}
						placeholder="Email"
						required
					/>
					<input
						type="password"
						name="password"
						onChange={this.handleChange}
						label="password"
						value={this.state.password}
						placeholder="Password"
						required
					/>

					{/* <input type="checkbox" id="rememberPW" name="rememberPW" />
				<label htmlFor="rememberPW" id="rememberLabel">
					Remember me
				</label> */}
				</form>
				<p style={{ color: "red" }}>{this.state.error}</p>

				<div className="sign-in-button-div">
					<button
						onClick={this.handleSubmit}
						className="custom-button sign-in-buttons"
					>
						Sign In
					</button>

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
				<h4>
					If you've forgotten your password, click{" "}
					<span
						style={{ color: "blue", textDecoration: "underline" }}
						onClick={(e) => {
							auth.sendPasswordResetEmail(this.state.email).catch((error) => {
								this.setState({ error: error.message });
							});
						}}
					>
						here
					</span>{" "}
					to reset it.
				</h4>
			</div>
		);
	};
}

export default SignIn;
