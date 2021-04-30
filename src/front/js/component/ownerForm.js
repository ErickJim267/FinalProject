import React, { useState } from "react";
import { Form, Button, Card, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
// import PropTypes from "prop-types";

export function OwnerForm() {
	const { store, actions } = React.useContext(Context);

	const [nombre, setNombre] = useState(store.userLogged.name);
	const [apellidos, setApellidos] = useState(store.userLogged.last_name);
	const [telefono, setTelefono] = useState(store.userLogged.phone);
	const [mes, setMes] = useState("");
	const [dia, setDia] = useState("");
	const [año, setAño] = useState("");
	const [provincia, setProvincia] = useState(store.userLogged.addresses[0].provicia);
	const [direccion, setDireccion] = useState(store.userLogged.addresses[0].exact_address);
	const [nombrePet, setNombrePet] = useState(store.userLogged.pets[0].pet_name);
	const [raza, setRaza] = useState(store.userLogged.pets[0].breed);
	const [especie, setEspecie] = useState(store.userLogged.pets[0].specie);
	const [genero, setGenero] = useState(store.userLogged.pets[0].sex);
	const [peso, setPeso] = useState(store.userLogged.pets[0].size);
	const [vacunado, setVacuna] = useState(store.userLogged.pets[0].vaccinate);
	const [desparasitado, setDesparasitado] = useState(store.userLogged.pets[0].dewormed);
	const [descripcion, setDescripcion] = useState(store.userLogged.pets[0].personality);
	const [edad, setEdad] = useState(store.userLogged.pets[0].range_age);

	return (
		<div>
			<Card style={{ width: "50rem", margin: "auto" }}>
				<Card.Body>
					<Card.Header style={{ fontSize: "1.8rem", fontWeight: "600" }}>
						Complete los datos de su perfil
					</Card.Header>
					<br />
					<Form>
						<Form.Group>
							<Form.File id="exampleFormControlFile1" label="Example file input" />
						</Form.Group>
					</Form>
					<br />
					<Card.Text>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter name"
								value={nombre}
								onChange={e => setNombre(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Apellidos</Form.Label>
							<Form.Control
								type="lastname"
								placeholder="Enter Lastname"
								value={apellidos}
								onChange={e => setApellidos(e.target.value)}
							/>

							<br />

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Teléfono</Form.Label>
								<Form.Control
									type="telephone"
									placeholder="+506 ____-____"
									value={telefono}
									onChange={e => setTeléfono(e.target.value)}
								/>
							</Form.Group>

							<Form.Label style={{ marginBottom: "20px" }}>Fecha de Nacimiento</Form.Label>

							<Form.Row>
								<Form.Group as={Col} controlId="formGridMonth">
									<Form.Label>Mes</Form.Label>
									<Form.Control
										as="select"
										defaultValue="Choose a month"
										onChange={e => setMes(e.target.value)}>
										<option value="01">Ene</option>
										<option value="02">Feb</option>
										<option value="03">Mar</option>
										<option value="04">Abr</option>
										<option value="05">May</option>
										<option value="06">Jun</option>
										<option value="07">Jul</option>
										<option value="08">Ago</option>
										<option value="09">Sep</option>
										<option value="10">Oct</option>
										<option value="11">Nov</option>
										<option value="12">Dic</option>
									</Form.Control>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridMonth">
									<Form.Label>Día</Form.Label>
									<Form.Control
										as="select"
										defaultValue="Choose a month"
										onChange={e => setDía(e.target.value)}>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
										<option value="19">19</option>
										<option value="20">20</option>
										<option value="21">21</option>
										<option value="22">22</option>
										<option value="23">23</option>
										<option value="24">24</option>
										<option value="25">25</option>
										<option value="26">26</option>
										<option value="27">27</option>
										<option value="28">28</option>
										<option value="29">29</option>
										<option value="30">30</option>
										<option value="31">31</option>
									</Form.Control>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridYear">
									<Form.Label>Año</Form.Label>

									<Form.Control onChange={e => setAño(e.target.value)} />
								</Form.Group>
							</Form.Row>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label>Provincia</Form.Label>
							<Form.Control as="select" onChange={e => setProvincia(e.target.value)} value={provincia}>
								<option hidden>Provincia</option>
								<option value="Alajuela">Alajuela</option>
								<option value="Cartago">Cartago</option>
								<option value="San Jose">San Jose</option>
								<option value="Heredia">Heredia</option>
								<option value="Limon">Limon</option>
								<option value="Guanacaste">Guanacaste</option>
								<option value="Puntarenas">Puntarenas</option>
							</Form.Control>
							<br />
							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Dirección</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									onChange={e => setDirección(e.target.value)}
									value={direccion}
								/>
							</Form.Group>
						</Form.Group>

						<h5>Información de la Mascota</h5>
						<br />

						<Form.Group controlId="formBasicpetname">
							<Form.Label>Nombre de la mascota</Form.Label>
							<Form.Control
								type="petname"
								placeholder="Enter pet's name"
								onChange={e => setNombrePet(e.target.value)}
								value={nombrePet}
							/>
						</Form.Group>
						<Form.Label style={{ marginBottom: "20px" }}>Tipo de mascota</Form.Label>
						{["checkbox"].map(type => (
							<div key={`inline-${type}`} className="mr-6">
								<Form.Check
									inline
									label="Cat"
									type={type}
									id={`inline-${type}-1`}
									value="cat"
									onChange={e => setEspecie(e.target.value)}
								/>
								<Form.Check
									inline
									label="Dog"
									type={type}
									id={`inline-${type}-2`}
									value="dog"
									onChange={e => setEspecie(e.target.value)}
								/>
							</div>
						))}
						<br />
						<Form.Group controlId="formBasicpetname">
							<Form.Label>Raza de la mascota</Form.Label>
							<Form.Control
								type="petname"
								placeholder="Enter pet's breed"
								onChange={e => setRaza(e.target.value)}
								value={raza}
							/>
						</Form.Group>
						<br />
						<Form.Label style={{ marginBottom: "20px" }}>Género</Form.Label>
						{["radio"].map(type => (
							<div key={`inline-${type}`} className="mr-6">
								<Form.Check
									inline
									label="Male"
									type={type}
									id={`inline-${type}-7`}
									value="male"
									onChange={e => setEspecie(e.target.value)}
								/>
								<Form.Check
									inline
									label="Female"
									type={type}
									id={`inline-${type}-8`}
									value="female"
									onChange={e => setEspecie(e.target.value)}
								/>
							</div>
						))}
						<br />
						<Form.Group controlId="exampleForm.SelectCustomSizeSm">
							<Form.Label>Edad</Form.Label>
							<Form.Control
								as="select"
								size="sm"
								custom
								value={edad}
								onChange={e => setEdad(e.target.value)}>
								<option>1-2 años</option>
								<option>2-5 años</option>
								<option>5-10 años</option>
								<option>10-15 años</option>
								<option>+15 años </option>
							</Form.Control>
						</Form.Group>
						<Form>
							<Form>
								<Form.Label style={{ marginBottom: "20px" }}>Peso</Form.Label>
								{["checkbox"].map(type => (
									<div key={`inline-${type}`} className="mr-6">
										<Form.Check
											inline
											label="2-10 lbs"
											type={type}
											id={`inline-${type}-1`}
											value="2-10"
											onChange={e => setEspecie(e.target.value)}
										/>
										<Form.Check
											inline
											label="10-15 lbs"
											type={type}
											id={`inline-${type}-2`}
											value="10-15"
											onChange={e => setEspecie(e.target.value)}
										/>
										<Form.Check
											inline
											label="+25 lbs"
											type={type}
											id={`inline-${type}-3`}
											value="+25"
											onChange={e => setEspecie(e.target.value)}
										/>
									</div>
								))}
								<br />
							</Form>
						</Form>
						<Form>
							<Form>
								<Form.Label style={{ marginBottom: "20px" }}>Vacunado?</Form.Label>

								{["radio"].map(type => (
									<div key={`inline-${type}`} className="mr-6">
										<Form.Check
											inline
											label="Sí"
											type={type}
											id={`inline-${type}-7`}
											value={true}
											onChange={e => setEspecie(e.target.value)}
										/>
										<Form.Check
											inline
											label="No"
											type={type}
											id={`inline-${type}-8`}
											value={false}
											onChange={e => setEspecie(e.target.value)}
										/>
									</div>
								))}

								<br />

								<Form.Label style={{ marginBottom: "20px" }}>Desparasitado?</Form.Label>

								{["radio"].map(type => (
									<div key={`inline-${type}`} className="mr-6">
										<Form.Check
											inline
											label="Sí"
											type={type}
											id={`inline-${type}-7`}
											value={true}
											onChange={e => setEspecie(e.target.value)}
										/>
										<Form.Check
											inline
											label="No"
											type={type}
											id={`inline-${type}-8`}
											value={false}
											onChange={e => setEspecie(e.target.value)}
										/>
									</div>
								))}
							</Form>

							<br />

							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Breve descripción de la mascota</Form.Label>
								<Form.Control
									as="textarea"
									rows={4}
									value={descripcion}
									onChange={e => setDescripcion(e.target.value)}
								/>
							</Form.Group>

							<br />
						</Form>
					</Card.Text>
					<Button variant="primary">Guardar perfil</Button>
				</Card.Body>
			</Card>
		</div>
	);
}
