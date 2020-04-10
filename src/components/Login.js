import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Login = () => {
	// const getEmailValue = () => document.querySelector("#email-field").value;

	return (
		<div className="main">
			<div className="logIn">
				<SignIn />
				<SignUp />
			</div>
		</div>
	);
};

export default Login;
