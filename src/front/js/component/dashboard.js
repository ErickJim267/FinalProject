import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Buddy } from "./buddy";
import { Owner } from "./owner";
import { OwnerForm } from "./ownerForm";

export function Dashboard() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Navbar.Brand href="#home">PetBnB</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#f"></Nav.Link>
						<Nav.Link href="#p"></Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#notificaciones">
							Notificaciones
						</Nav.Link>
						<Nav.Link eventKey={2} href="#cerrarsesion">
							Cerrar Sesion
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<br />

			<h6>Welcome User</h6>

			<br />
			{/* <Buddy /> */}
			<OwnerForm />
		</div>
	);
}
