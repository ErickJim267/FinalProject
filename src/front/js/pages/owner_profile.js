import React, { useState } from "react";
import { Row, Col, Card, CardDeck } from "react-bootstrap";
import "../../styles/owner_profile.scss";
import PropTypes from "prop-types";

const Owner_profile = () => {
	const [ownerInfo, setOwnerInfo] = useState("");
	console.log(ownerInfo);
	const [cuidados, setCuidados] = useState("");
	console.log(cuidados);
	const [personalidad, setPersonalidad] = useState("");
	console.log(personalidad);
	const [petInfo, setPetInfo] = useState("");
	console.log(petInfo);

	return (
		<div id="profileCont">
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
								<div>
									<div value={ownerInfo} onChange={e => set(e.target.value)}>
										<li value="Nombre">Nombre</li>
										<li value="Dirección">Dirección</li>
										<li value="Teléfono">Teléfono</li>
									</div>
								</div>
							</Card.Text>
							{/*<Button variant="primary">Añade una reservación</Button>*/}
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{/*Inicia segundo Row para otras fotos y detalles de verificación*/}
			<Row id="cardDeck">
				<Col>
					<div>
						<img
							src="https://i2.wp.com/hipertextual.com/wp-content/uploads/2019/05/hipertextual-muere-grumpy-cat-gata-que-impulso-miles-memes-internet-2019278176.jpg?fit=1600%2C881&ssl=1"
							className="imgCont"
						/>
						<div value={cuidados} onChange={e => setCuidados(e.target.value)}>
							<li hidden>Cuidados especiales</li>
							<li value="cuidado1">Cuidados</li>
							<li value="cuidado2">Cuidados</li>
							<li value="cuidado3">Cuidados</li>
						</div>
					</div>
				</Col>
				<Col>
					<div>
						<img src="https://static.dw.com/image/18116106_401.jpg" className="imgCont" />
						<div value={personalidad} onChange={e => setPersonalidad(e.target.value)}>
							<li hidden>Mi personalidad</li>
							<li value="personalidad1">personalidad</li>
							<li value="personalidad2">personalidad</li>
							<li value="personalidad3">personalidad</li>
						</div>
					</div>
				</Col>
				<Col>
					<div>
						<img
							src="https://ep01.epimg.net/verne/imagenes/2019/05/17/articulo/1558087739_432602_1558090295_noticia_normal.jpg"
							className="imgCont"
						/>
						<div value={petInfo} onChange={e => setPetInfo(e.target.value)}>
							<li hidden>Lo que debes saber de mí</li>
							<li value="petInfo1">Info</li>
							<li value="petInfo2">Info</li>
							<li value="petInfo3">Info</li>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};
export default Owner_profile;
