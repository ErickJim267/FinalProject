import React from "react";
// import { Navbar, Nav, Button } from "react-bootstrap";
import { BuddyForm } from "../component/buddyForm";
import { OwnerForm } from "../component/ownerForm";
import { Context } from "../store/appContext";

export function Dashboard() {
	const { store, actions } = React.useContext(Context);

	React.useEffect(
		() => {
			if (store.token && store.token != "" && store.token != undefined) {
				actions.fetchUserLogged();
			}
		},
		[store.token]
	);

	return (
		<div>
			{/* <Navbar
				style={{ marginBottom: ".8rem", padding: "2rem 1rem" }}
				collapseOnSelect
				expand="lg"
				bg="light"
				variant="light">
				<Link to="/">
					<Navbar.Brand>PetBnB</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Link to="/owner-profile/1">
							<Nav.Link href="#">Notificaciones</Nav.Link>
						</Link>
						<Button
							style={{ fontSize: "23px", color: "rgba(0, 0, 0, 0.5)" }}
							variant="outline-secondary"
							onClick={cerrarSesion}>
							Cerrar Sesión
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar> */}

			<br />
			{store.userLogged && (
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
