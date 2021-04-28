import React, { useState, useContext } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Login() {
	const [validated, setValidated] = useState(false);
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("");

	const { store, actions } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
		// validar formulario
		if(!validateForm(e)) return;

		// actions.login(email, password).then(res => {
		// 	//reset formulario
		// 	if(res) {
		// 		resetForm();
		// 		setAuth(true);
		// 	}
		// });
	};

	const validateForm = e => {
		// const form = e.currentTarget;
		// if (form.checkValidity() === false) {
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// }
		// setValidated(true);

		if (email.trim() === "") {
			alert("Debe de escribir un email");
			return false;
		}
		if (password === "") {
			alert("Debe de escribir una contraseña");
			return false;
		}

		return true;
	};

	const resetForm = () => {
		setEmail("");
		setPassword("");
	};

	return (
		<CardGroup>
			<Card>
				<Card.Body>
					<Card.Title>
						<h1>Ingreso</h1>
					</Card.Title>
					<br />
					<div>
						<Form onSubmit={handleSubmit}>
							<br />
							<Form.Group controlId="formBasicEmail">
								<Form.Label>E-mail</Form.Label>
								<Form.Control 
									required 
									type="email" 
									placeholder="Enter email" 
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								<Form.Text className="text-muted" />
							</Form.Group>
							<br />
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control 
									required 
									type="password" 
									placeholder="Password"
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</Form.Group>
							<br />
							<Button variant="primary" type="submit" style={{ backgroundColor: "#de681f" }}>
								Ingresar
							</Button>
						</Form>
						<br />
						<Link to="/reset-password">
							<small className="text-muted">Olvidó la contraseña?</small>
						</Link>
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