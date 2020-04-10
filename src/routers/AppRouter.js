import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import homePage from "../components/homePage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Privacy from "../components/Privacy";
import AboutPage from "../components/AboutPage";
import Contact from "../components/Contact";
import Login from "../components/Login";
import FAQ from "../components/FAQ";
import ScrollToTop from "../components/ScrollToTop";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import Account from "../components/Account";

class AppRouter extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			}
			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header currentUser={this.state.currentUser} />
					<ScrollToTop />
					<Switch>
						<Route path="/" component={homePage} exact={true} />
						<Route path="/login" component={Login} />
						<Route path="/contact" component={Contact} />
						<Route path="/faq" component={FAQ} />
						<Route path="/about" component={AboutPage} />
						<Route path="/account" component={Account} />
						<Route path="/privacy" component={Privacy} />
						<Route component={NotFoundPage} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default AppRouter;
