import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import logo from "../../img/btnpetbnbLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 d-fixed" style={{ backgroundColor: "transparent" }}>
			<Link to="/">
				<img className="logo" src={logo} />
			</Link>
			<div className="ml-auto" style={{ display: "inline-flex" }}>
				<Link to="/register">
					<button className="btnNav" style={{ margin: "10px" }}>
						Register
					</button>
				</Link>
				<br />
				<Link to="/signin">
					<button className="btnNav" style={{ margin: "10px" }}>
						Sign In
					</button>
				</Link>
			</div>
		</nav>
	);
};
