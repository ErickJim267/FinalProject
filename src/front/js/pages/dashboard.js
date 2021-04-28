import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BuddyForm } from "../component/buddyForm";
import { OwnerForm } from "../component/ownerForm";

export function Dashboard() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Navbar.Brand href="#home">PetBnB</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#f" />
						<Nav.Link href="#p" />
					</Nav>
					<Nav>
						<Nav.Link href="#notificaciones">Notificaciones</Nav.Link>
						<Nav.Link eventKey={2} href="#cerrarsesion">
							Cerrar Sesion
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<br />

			<h6>Welcome User</h6>

			<br />
			<BuddyForm />
			{/* <OwnerForm /> */}
		</div>
	);
}
