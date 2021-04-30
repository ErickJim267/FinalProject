import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { BuddyForm } from "../component/buddyForm";
import { OwnerForm } from "../component/ownerForm";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export function Dashboard() {
	const { store, actions } = React.useContext(Context);
	const history = useHistory();

	React.useEffect(
		() => {
			if (store.token && store.token != "" && store.token != undefined) {
				actions.fetchUserLogged();
			}
		},
		[store.token]
	);

	const cerrarSesion = () => {
		actions.logout();
		history.push("/");
	};

	return (
		<div>
			<Navbar
				style={{ marginBottom: ".8rem", padding: "2rem 1rem" }}
				collapseOnSelect
				expand="lg"
				bg="light"
				variant="light">
				<Navbar.Brand href="#home">PetBnB</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#f" />
						<Nav.Link href="#p" />
					</Nav>
					<Nav>
						<Nav.Link href="#notificaciones">Notificaciones</Nav.Link>
						{/* <Nav.Link eventKey={2} href="#cerrarsesion">
							Cerrar Sesión
						</Nav.Link> */}
						<Button
							style={{ fontSize: "23px", color: "rgba(0, 0, 0, 0.5)" }}
							variant="outline-secondary"
							onClick={cerrarSesion}>
							Cerrar Sesión
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<br />
			{store.userLogged !== null && (
				<>
					<h3 className="mt-5">
						Bienvenido: {store.userLogged.name.toUpperCase()} {store.userLogged.last_name.toUpperCase()}
					</h3>
					<br />
					{store.userLogged.user_role === "buddy" ? <BuddyForm /> : <OwnerForm />}
				</>
			)}
		</div>
	);
}
