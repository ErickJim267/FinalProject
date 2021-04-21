import React from "react";
import { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

export function Login() {
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
						<h1>Log In</h1>
					</Card.Title>

					<br />

					<div>
						<Form noValidate validated={validated} onSubmit={handleSubmit}>
							<br />

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control required type="email" placeholder="Enter email" />
								<Form.Text className="text-muted" />
							</Form.Group>

							<br />

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control required type="password" placeholder="Password" />
							</Form.Group>

							<br />

							<Button variant="primary" type="submit" style={{ backgroundColor: "#de681f" }}>
								Login
							</Button>
						</Form>

						<br />

						<small className="text-muted">Forgot password?</small>
					</div>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img
					variant="center"
					src="https://www.doggypark.com.co/wp-content/uploads/2020/10/Pastor-Caucasico2.jpg"
					thumbnail
				/>
			</Card>
		</CardGroup>
	);
}
