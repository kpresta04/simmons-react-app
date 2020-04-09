import React from "react";
import { signInWithGoogle } from "../firebase/firebase.utils";

const Login = () => (
	<div className="main">
		<div className="logIn">
			<h3>Log In To Your Account</h3>
			{/* <h5>Don't have an account? Sign Up</h5> */}

			<form
				id="contactForm"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				{/* <input type="text" placeholder="Username" required=" " />
				<input type="password" placeholder="Password" required=" " />
				<input type="checkbox" id="rememberPW" name="rememberPW" />
				<label htmlFor="rememberPW" id="rememberLabel">
					Remember me
				</label> */}
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
					Log In With Google
				</button>

				<button
					id="emailSignInButton"
					className="custom-button sign-in-buttons"
				>
					Log In With Email{" "}
				</button>
				{/* <h4>If you've forgotten your password, click here to reset it.</h4> */}
			</form>
		</div>
	</div>
);

export default Login;
