import React from "react";
import { auth } from "../firebase/firebase.utils";

const Account = () => (
	<div className="main">
		<p>This is my accout page</p>
		<button className="custom-button" onClick={() => auth.signOut()}>
			Sign Out
		</button>
	</div>
);

export default Account;
