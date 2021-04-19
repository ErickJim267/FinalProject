import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
//import Logo from "../../img/btnpetbuddiesLogo.png";
//img={(src = { Logo })}

export const Navbar = () => {
	return (
		<nav className="navbar mb-3" style={{ backgroundColor: "transparent" }}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Pet Buddy</span>
			</Link>
			<div className="ml-auto" style={{ display: "inline-flex" }}>
				<Link to="/register">
					<button className="btn btn-primary" style={{ margin: "10px" }}>
						Register
					</button>
				</Link>
				<br />
				<Link to="/signin">
					<button className="btn btn-primary" style={{ margin: "10px" }}>
						Sign In
					</button>
				</Link>
			</div>
		</nav>
	);
};
