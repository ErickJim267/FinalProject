import React from "react";
import { Form, Button, Card, Col } from "react-bootstrap";

export function OwnerForm() {
	return (
		<div>
			<Card style={{ width: "50rem", margin: "auto" }}>
				<Card.Body>
					<Card.Header>Crear perfil - Dueño</Card.Header>

					<br />

					<Card.Text>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Nombre</Form.Label>
							<Form.Control type="name" placeholder="Enter name" />
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Apellidos</Form.Label>
							<Form.Control type="lastname" placeholder="Enter Lastname" />

							<br />

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Teléfono</Form.Label>
								<Form.Control type="telephone" placeholder="+506 ____-____" />
							</Form.Group>

							<Form.Label style={{ marginBottom: "20px" }}>Fecha de Nacimiento</Form.Label>

							<Form.Row>
								<Form.Group as={Col} controlId="formGridMonth">
									<Form.Label>Mes</Form.Label>
									<Form.Control as="select" defaultValue="Choose a month">
										<option>Ene</option>
										<option>Feb</option>
										<option>Mar</option>
										<option>Abr</option>
										<option>May</option>
										<option>Jun</option>
										<option>Jul</option>
										<option>Ago</option>
										<option>Sep</option>
										<option>Oct</option>
										<option>Nov</option>
										<option>Dic</option>
									</Form.Control>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridMonth">
									<Form.Label>Día</Form.Label>
									<Form.Control as="select" defaultValue="Choose a month">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
										<option>6</option>
										<option>7</option>
										<option>8</option>
										<option>9</option>
										<option>10</option>
										<option>11</option>
										<option>12</option>
										<option>13</option>
										<option>14</option>
										<option>15</option>
										<option>16</option>
										<option>17</option>
										<option>18</option>
										<option>19</option>
										<option>20</option>
										<option>21</option>
										<option>22</option>
										<option>23</option>
										<option>24</option>
										<option>25</option>
										<option>26</option>
										<option>27</option>
										<option>28</option>
										<option>29</option>
										<option>30</option>
										<option>31</option>
									</Form.Control>
								</Form.Group>
								<Form.Group as={Col} controlId="formGridYear">
									<Form.Label>Año</Form.Label>

									<Form.Control />
								</Form.Group>
							</Form.Row>
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlSelect1">
							<Form.Label>Provincia</Form.Label>
							<Form.Control as="select">
								<option>Alajuela</option>
								<option>Cartago</option>
								<option>San Jose</option>
								<option>Heredia</option>
								<option>Limon</option>
								<option>Guanacaste</option>
							</Form.Control>

							<br />

							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Dirección</Form.Label>
								<Form.Control as="textarea" rows={3} />
							</Form.Group>
						</Form.Group>

						<h5>Información de la Mascota</h5>
						<br />

						<Form.Group controlId="formBasicpetname">
							<Form.Label>Nombre de la mascota</Form.Label>
							<Form.Control type="petname" placeholder="Enter pet's name" />
						</Form.Group>

						<Form.Label style={{ marginBottom: "20px" }}>Tipo de mascota</Form.Label>

						{["checkbox"].map(type => (
							<div key={`inline-${type}`} className="mr-6">
								<Form.Check inline label="Cat" type={type} id={`inline-${type}-1`} />
								<Form.Check inline label="Dog" type={type} id={`inline-${type}-2`} />
								<Form.Check inline label="Other" type={type} id={`inline-${type}-3`} />
							</div>
						))}

						<br />

						<Form.Group controlId="formBasicpetname">
							<Form.Label>Raza de la mascota</Form.Label>
							<Form.Control type="petname" placeholder="Enter pet's race" />
						</Form.Group>

						<br />

						<Form.Label style={{ marginBottom: "20px" }}>Género</Form.Label>

						{["radio"].map(type => (
							<div key={`inline-${type}`} className="mr-6">
								<Form.Check inline label="Male" type={type} id={`inline-${type}-7`} />
								<Form.Check inline label="Female" type={type} id={`inline-${type}-8`} />
							</div>
						))}

						<br />

						<Form.Group controlId="exampleForm.SelectCustomSizeSm">
							<Form.Label>Edad</Form.Label>
							<Form.Control as="select" size="sm" custom>
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
										<Form.Check inline label="2-10 lbs" type={type} id={`inline-${type}-1`} />
										<Form.Check inline label="10-15 lbs" type={type} id={`inline-${type}-2`} />
										<Form.Check inline label="+25 lbs" type={type} id={`inline-${type}-3`} />
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
										<Form.Check inline label="Sí" type={type} id={`inline-${type}-7`} />
										<Form.Check inline label="No" type={type} id={`inline-${type}-8`} />
									</div>
								))}

								<br />

								<Form.Label style={{ marginBottom: "20px" }}>Desparasitado?</Form.Label>

								{["radio"].map(type => (
									<div key={`inline-${type}`} className="mr-6">
										<Form.Check inline label="Sí" type={type} id={`inline-${type}-7`} />
										<Form.Check inline label="No" type={type} id={`inline-${type}-8`} />
									</div>
								))}
							</Form>

							<br />

							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Breve descripción de la mascota</Form.Label>
								<Form.Control as="textarea" rows={4} />
							</Form.Group>

							<br />
						</Form>
					</Card.Text>
					<Button variant="primary">Crear perfil</Button>
				</Card.Body>
			</Card>
		</div>
	);
}
