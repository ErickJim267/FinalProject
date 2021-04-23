import React from "react";
import { Row, Col, Card, CardDeck } from "react-bootstrap";
import "../../styles/owner_profile.scss";

export const Owner_profile = () => {
	return (
		<>
			<div>
				<Row>
					<Col md={9}>
						<>
							<Card>
								<Card>
									<Card.Img
										src="https://www.capital.de/wp-content/uploads/2019/05/GettyImages-453408496.jpg"
										alt="your pet picture here"
										className="imgContainer"
									/>
									<Card.Body>
										<Card.Text>Momento especial de mi mascota XD</Card.Text>
									</Card.Body>
								</Card>
							</Card>
						</>
					</Col>

					<Col md={3}>
						<Card className="ownerCard" style={{ width: "18rem" }}>
							<Card.Img
								variant="top"
								src="https://cdn.images.express.co.uk/img/dynamic/128/590x/secondary/grumpy-cat-dead-owner-Tabatha-Bundesen-1873983.jpg?r=1558101517100"
							/>
							<Card.Body>
								<Card.Text>
									<div>Some info here</div>
									<div>Some info here</div>
									<div>Some info here</div>
								</Card.Text>
								{/*<Button variant="primary">Añade una reservación</Button>*/}
							</Card.Body>
						</Card>
					</Col>
				</Row>
				{/*Inicia segundo Row para otras fotos y detalles de verificación*/}
				<Row>
					<Col md={12}>
						<div className="cardDeck">
							<CardDeck>
								<Card>
									<Card.Img
										variant="top"
										src="https://static.fjcdn.com/large/pictures/7a/b1/7ab15d_4424197.jpg"
										className="imgContainer"
									/>
									<Card.Body>
										<Card.Title>Cuidados especiales</Card.Title>
										<Card.Text>
											<ul>
												<li>Que no vea al padre porque se pone molesto</li>
												<li />
												<li />
												<li />
												<li />
												<li />
											</ul>
										</Card.Text>
									</Card.Body>
								</Card>
								<Card>
									<Card.Img
										variant="top"
										src="https://images.csmonitor.com/csm/2014/12/1208grumpycat.jpg?alias=standard_900x600"
										className="imgContainer"
									/>
									<Card.Body>
										<Card.Title>Mi personalidad</Card.Title>
										<Card.Text>
											<ul>
												<li />
												<li />
												<li />
												<li />
												<li />
												<li />
											</ul>
										</Card.Text>
									</Card.Body>
								</Card>
								<Card>
									<Card.Img
										variant="top"
										src="https://static.dw.com/image/18116106_401.jpg"
										className="imgContainer"
									/>
									<Card.Body>
										<Card.Title>Lo que debes saber de mí</Card.Title>
										<Card.Text>
											<ul>
												<li />
												<li />
												<li />
												<li />
												<li />
												<li />
											</ul>
										</Card.Text>
									</Card.Body>
								</Card>
							</CardDeck>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
};
