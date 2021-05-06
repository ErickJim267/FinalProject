import React from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import logo from "../../img/btnpetbnbLogo.png";

export const Navbar = () => {
	const { store, actions } = React.useContext(Context);
	const history = useHistory();
	let location = useLocation();

	const cerrarSesion = () => {
		actions.logout();
		history.push("/");
	};

	return (
		<nav className="navbar mb-3 d-fixed" style={{ backgroundColor: "transparent" }}>
			<Link to="/">
				<img className="logo" src={logo} />
			</Link>
			{location.pathname !== "/login" && location.pathname !== "/register" ? (
				<div className="ml-auto" style={{ display: "inline-flex" }}>
					{!store.token ? (
						<>
							<Link to="/register">
								<button className="btnNav" style={{ margin: "10px" }}>
									Registro
								</button>
							</Link>
							<br />
							<Link to="/login">
								<button className="btnNav" style={{ margin: "10px" }}>
									Ingresar
								</button>
							</Link>
						</>
					) : (
						<button className="btnNav" style={{ margin: "10px" }} onClick={cerrarSesion}>
							Cerrar Sesión
						</button>
					)}
				</div>
			) : null}
		</nav>
	);
};
