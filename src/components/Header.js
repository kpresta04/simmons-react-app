import React from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

const Header = () => (
	<div className="headerParent">
		<header>
			{window.screen.width < 900 && <BurgerMenu />}
			<NavLink
				to="/"
				className="headerLogo"
				activeClassName="is-active"
				exact={true}
			>
				<img src="./logoSmall.webp" alt="Simmons Gun Repair Logo"></img>
			</NavLink>
			{window.screen.width >= 900 && (
				<div style={{ display: "contents" }}>
					<div id="siteLinks">
						<NavLink to="/shop" activeClassName="is-active">
							Shop
						</NavLink>

						<NavLink to="/services" activeClassName="is-active">
							Services
						</NavLink>
						<NavLink to="/about" activeClassName="is-active">
							About
						</NavLink>
						<NavLink to="/faq" activeClassName="is-active">
							FAQ
						</NavLink>
						<NavLink to="/contact" activeClassName="is-active">
							Contact
						</NavLink>
					</div>
					<div id="accountLinks">
						<NavLink to="/login" activeClassName="is-active">
							Login
						</NavLink>
						<NavLink to="/cart" activeClassName="is-active">
							Cart
						</NavLink>
					</div>
				</div>
			)}
		</header>
	</div>
);

export default Header;
