import React from "react";
import "../../styles/sectionTab.scss";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import owner1 from "../../img/ownerCrumbs1.png";
import owner2 from "../../img/ownerCrumbs2.png";
import owner3 from "../../img/ownerCrumbs3.png";
import buddy1 from "../../img/buddyCrumbs1.png";
import buddy2 from "../../img/buddyCrumbs2.png";
import buddy3 from "../../img/buddyCrumbs3.png";

const SectionTab = () => {
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first">
			<Row>
				<Col md={4} className="offset-5" style={{ textAlign: "center" }}>
					<Nav variant="pills" className="flex-row">
						<Nav.Item>
							<Nav.Link eventKey="first">Dueño</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second">Buddy</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
			</Row>
			<Row>
				<Col md={10} className="offset-1">
					<Tab.Content>
						<Tab.Pane eventKey="first">
							<div className="cardData">
								<div>
									<div className="card">
										<p>1. Crear tu perfil</p>
									</div>
									<br />
									<div>
										<img src={owner1} />
									</div>
									Ingresa tus datos
								</div>
								<div>
									<div className="card">
										<p>2. Establece la disponibilidad</p>
										<br />
									</div>
									<div>
										<img src={owner2} />
									</div>
									Elige un periodo para tus planes
								</div>
								<div>
									<div className="card">
										<p>3. Comunícate con los Buddies</p>
										<br />
									</div>
									<div>
										<img src={owner3} />
									</div>
									Agenda una reservación
								</div>
							</div>
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<div className="cardData">
								<div>
									<div className="card">
										<p>1. Indica tu sitio</p>
									</div>
									<br />
									<div>
										<img src={buddy1} />
									</div>
									Verifica tu lugar y espacio
								</div>
								<div>
									<div className="card">
										<p>2. Crear tu perfil</p>
									</div>
									<br />
									<div>
										<img src={buddy2} />
									</div>
									Ingresa tus datos como Buddy
								</div>
								<div>
									<div className="card">
										<p>3. Comunícate con los Dueños</p>
									</div>
									<br />
									<div>
										<img src={buddy3} />
									</div>
									Revisa reserviaciones según tu disponibilidad
								</div>
							</div>
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};

export default SectionTab;
