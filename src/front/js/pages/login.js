import React, { useState, useContext } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export function Login() {
	const [validated, setValidated] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [auth, setAuth] = useState(false);
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		if (!validateForm(e)) return;
		actions.login(email, password);
		resetForm();
		// .then(res => {
		// 	if (res) {
		// 		//reset formulario
		// 		resetForm();
		// 		history.push("/dashboard");
		// 	}
		// });
	};

	const validateForm = e => {
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

	if (store.token && store.token != "" && store.token != undefined) history.push("/dashboard");

	return (
		<CardGroup>
			<Card>
				<Card.Body>
					<Card.Title>
						<h1>Log In</h1>
					</Card.Title>
					<br />
					<div>
						<Form onSubmit={handleSubmit}>
							<br />
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
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
								Login
							</Button>
						</Form>
						<br />
						<Link to="/reset-password">
							<small className="text-muted">Forgot password?</small>
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
