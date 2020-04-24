import React from "react";
import {
	auth,
	createUserProfileDocument,
	signInWithGoogle,
} from "../firebase/firebase.utils";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
			error: null,
		};
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (!displayName || !email || !password || !confirmPassword) {
			this.setState({ error: "All fields are required" });
			return;
		}
		if (password !== confirmPassword) {
			this.setState({ error: "Passwords don't match" });
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
				error: "",
			});
		} catch (error) {
			this.setState({ error: error.message });
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};
	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<div className="contactForm">
				<h3>Sign Up</h3>

				<form
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							this.handleSubmit(e);
						}
					}}
				>
					<input
						type="text"
						name="displayName"
						onChange={this.handleChange}
						label="displayName"
						value={displayName}
						placeholder="Full name"
						required
					/>
					<input
						type="email"
						name="email"
						onChange={this.handleChange}
						label="email"
						value={email}
						placeholder="Email"
						required=" "
					/>
					<input
						type="password"
						name="password"
						onChange={this.handleChange}
						label="password"
						value={password}
						placeholder="Password"
						required=" "
					/>
					<input
						type="password"
						name="confirmPassword"
						onChange={this.handleChange}
						value={confirmPassword}
						label="confirmPassword"
						placeholder="Confirm Password"
						required=" "
					/>

					{/* <input type="checkbox" id="rememberPW" name="rememberPW" />
				<label htmlFor="rememberPW" id="rememberLabel">
					Remember me
				</label> */}
				</form>
				<p style={{ color: "red" }}>{this.state.error}</p>

				<div>
					<button
						onClick={this.handleSubmit}
						className="custom-button sign-in-buttons"
					>
						Sign Up
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
						Sign Up
					</button>
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<h4>
						Already have an account? <Link to={"/signin"}>Sign in</Link>{" "}
					</h4>
				</div>
			</div>
		);
	}
}

export default SignUp;
