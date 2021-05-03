import React, { useState, useContext } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
import short from "short-uuid";

import { Context } from "../store/appContext";

export function Register() {
	const [validated, setValidated] = useState(false);
	const [role, setRole] = useState("");
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passConfirm, setPassConfirm] = useState("");
	const history = useHistory();

	const { store, actions } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
		// validar formulario
		if (!validateForm(e)) return;

		// Registrar nuevo usuario
		const id = short.uuid();
		const user = { id, role, name, lastName, email, password };

		actions.registerUser(user).then(res => {
			console.log(res);
			if (res == true) {
				//reset formulario
				resetForm();
				history.push("/login");
			}
		});
	};

	const validateForm = e => {
		// const form = e.currentTarget;
		// if (form.checkValidity() === false) {
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// }
		// setValidated(true);

		if (role.trim() === "") {
			alert("Debe de seleccionar un rol de usuario");
			return false;
		}
		if (name.trim() === "") {
			alert("Debe de escribir un nombre");
			return false;
		}
		if (lastName.trim() === "") {
			alert("Debe de escribir su apellido");
			return false;
		}
		if (email.trim() === "") {
			alert("Debe de escribir un email");
			return false;
		}
		if (password.trim() === "") {
			alert("Debe de escribir un password");
			return false;
		}
		if (password !== passConfirm) {
			alert("Su contraseña no coincide");
			return false;
		}

		return true;
	};

	const resetForm = () => {
		setRole("");
		setName("");
		setLastName("");
		setEmail("");
		setPassConfirm("");
		setPassword("");
	};

	return (
		<CardGroup>
			<Card>
				<Card.Body>
					<Card.Title>
						<h1>Registro</h1>
					</Card.Title>
					<br />
					<div>
						<Form onSubmit={handleSubmit}>
							<div>
								<h5> Tipo de Usuario </h5>
								<br />
								<Button
									variant="primary"
									size="sm"
									onClick={e => setRole(e.target.value)}
									value="owner">
									OWNER
								</Button>

								<Button
									variant="secondary"
									size="sm"
									onClick={e => setRole(e.target.value)}
									value="buddy">
									BUDDY
								</Button>
							</div>
							<br />
							<Form.Group controlId="validationCustom01">
								<Form.Label>Name</Form.Label>
								<Form.Control
									required
									type="name"
									placeholder="Enter name"
									value={name}
									onChange={e => setName(e.target.value)}
								/>
							</Form.Group>
							<br />
							<Form.Group controlId="formBasiclastname">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									required
									type="lastname"
									placeholder="Enter lastname"
									value={lastName}
									onChange={e => setLastName(e.target.value)}
								/>
								<Form.Text className="text-muted" />
							</Form.Group>
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
							<Form.Group controlId="formBasicconfirmpassword">
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									required
									type="password"
									placeholder="Confirm Password"
									value={passConfirm}
									onChange={e => setPassConfirm(e.target.value)}
								/>
							</Form.Group>
							<br />
							<Button
								variant="primary"
								type="submit"
								style={{ backgroundColor: "#de681f", border: "none" }}>
								Register
							</Button>
						</Form>
						<br />
						<Link to="/login">
							<p className="text-muted">Have already accont?</p>
						</Link>
					</div>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img
					variant="center"
					src="https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-764x1024.png"
				/>
			</Card>
		</CardGroup>
	);
}
