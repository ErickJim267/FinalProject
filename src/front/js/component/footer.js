import React, { Component } from "react";
import "../../styles/footer.scss";
import { Row, Col } from "react-bootstrap";
//import { Link } from "react-router-dom";

export const Footer = () => (
	<div>
		<footer className="footer mt-auto py-3 text-center">
			<Row>
				<Col>
					<p>
						<ul>
							<p>Contáctanos</p>
							<p>Acerca de PetbnbCR</p>
							<p>Nuestras redes sociales</p>
							<div>
								<a href="https://www.instagram.com" alt="https://www.instagram.com">
									<i className="fab fa-instagram" />
								</a>
								<br />
								<a href="https://www.facebook.com" alt="https://www.facebook.com">
									<i className="fab fa-facebook" />
								</a>
								<br />
								<a href="https://www.twitter.com" alt="https://www.twitter.com">
									<i className="fab fa-twitter-square" />
								</a>
								<br />
							</div>
						</ul>
					</p>
					<p>
						Made with <i className="fa fa-heart text-danger" /> by Erick, Jose y Julio
					</p>
				</Col>
			</Row>
		</footer>
	</div>
);
