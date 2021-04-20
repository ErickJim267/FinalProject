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
				<Col md={4} className="offset-4">
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
				<Col md={2}>
					<Tab.Content>
						<Tab.Pane eventKey="first">
							<div>
								<p>1. Crear tu perfil</p>
								<img src={owner1} />
								<p>2. Establece la disponibilidad</p>
								<img src={owner2} />
								<p>3. Comunícate con los Buddies</p>
								<img src={owner3} />
							</div>
						</Tab.Pane>
						<Tab.Pane eventKey="second" variety="transparent">
							<div>
								<p>1. Indica tu sitio</p>
								<img src={buddy1} />
								<p>2. Crear tu perfil</p>
								<img src={buddy2} />
								<p>3. Comunícate con los Dueños</p>
								<img src={buddy3} />
							</div>
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};

export default SectionTab;
