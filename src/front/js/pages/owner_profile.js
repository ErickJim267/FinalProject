import React from "react";
import { Row, Col, Card, CardDeck } from "react-bootstrap";
import "../../styles/owner_profile.scss";

export const Owner_profile = () => {
	return (
		<div className="profileCont">
			<Row>
				<Col md={9}>
					<>
						<Card>
							<Card>
								<Card.Img
									src="https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg"
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
								<div>nombre del dueño</div>
								<div>info</div>
								<div>info</div>
							</Card.Text>
							{/*<Button variant="primary">Añade una reservación</Button>*/}
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/*Inicia segundo Row para otras fotos y detalles de verificación*/}
			<div className="cardDeck" />
			<Row>
				<Col md={12}>
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
										<li>Sin fotos</li>
										<li>No intentar hacerlo reir</li>
										<li>No decirle lindo</li>
										<li>Text here</li>
										<li>Text here</li>
										<li>Text here</li>
									</ul>
								</Card.Text>
							</Card.Body>
						</Card>
						<Card>
							<Card.Img
								variant="top"
								src="https://ep01.epimg.net/verne/imagenes/2019/05/17/articulo/1558087739_432602_1558090295_noticia_normal.jpg"
								className="imgContainer"
							/>
							<Card.Body>
								<Card.Title>Mi personalidad</Card.Title>
								<Card.Text>
									<ul>
										<li>Todo me aburre</li>
										<li>Quiero tranquilidad</li>
										<li>no me gusta jugar</li>
										<li>No me gusta tener vecinos</li>
										<li>No me gusta nada</li>
										<li>No quiero nada</li>
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
										<li>No tengo enfermedades</li>
										<li>No tengo operaciones</li>
										<li>No tengo alergias</li>
										<li>No tengo chip</li>
										<li>Solo castracion</li>
										<li>Text here</li>
									</ul>
								</Card.Text>
							</Card.Body>
						</Card>
					</CardDeck>
				</Col>
			</Row>
		</div>
	);
};
