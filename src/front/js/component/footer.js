import React, { Component } from "react";
import "../../styles/footer.scss";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div>
		<footer className="footer mt-auto py-3 text-center">
			<Row>
				<Col>
					<p>
						<ul>
							<p>Contáctanos</p>
							<p>Acerca de Petbnb</p>
							<p>Nuestras redes sociales</p>
							<div>
								<Link>
									<i className="fab fa-instagram" />
								</Link>
								<br />
								<Link>
									<i className="fab fa-facebook" />
								</Link>
								<br />
								<Link>
									<i className="fab fa-twitter-square" />
								</Link>
								<br />
							</div>
						</ul>
					</p>
					<p>
						Made with <i className="fa fa-heart text-danger" /> by Adan, Erick, Jose y Julio
					</p>
				</Col>
			</Row>
		</footer>
	</div>
);
