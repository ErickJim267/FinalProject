import React from "react";
import { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

export function Resetpassword() {
	const [validated, setValidated] = useState(false);

	const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<CardGroup>
			<Card>
				<Card.Body>
					<Card.Title>
						<h1>Recuperación del Password</h1>
					</Card.Title>

					<br />

					<div>
						<Form noValidate validated={validated} onSubmit={handleSubmit}>
							<br />

							<Form.Group controlId="formBasicEmail">
								<Form.Label>E-mail</Form.Label>
								<Form.Control required type="email" placeholder="Ingrese su E-mail" />
								<Form.Text className="text-muted" />
							</Form.Group>

							<small className="text-muted">Recibirá un correo con los pasos a seguir</small>
							<br />

							<br />

							<Button variant="primary" type="submit" style={{ backgroundColor: "#de681f" }}>
								Recuperar password
							</Button>
						</Form>

						<br />

						{/* <small className="text-muted">Back to Home</small> */}
					</div>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img
					variant="center"
					src="https://www.elrancaguino.cl/wp-content/uploads/2019/02/perro-y-gato.jpg"
				/>
			</Card>
		</CardGroup>
	);
}
