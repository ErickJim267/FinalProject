import React from "react";
//import { Context } from "../store/appContext";, { useContext }
import "../../styles/home.scss";
import { Jumbotron, Carousel, Form, Col, Button } from "react-bootstrap";
<<<<<<< HEAD
import SectionTab from "./sectionTab";
import Info from "./info";
=======
import { Link } from "react-router-dom";
import SectionTab from "../component/sectionTab";
import Info from "../component/info";
>>>>>>> test

export const Home = () => {
	//const { store, actions } = useContext(Context);

	return (
		<div>
			<div>
				<Carousel fade>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="http://www.petsworld.in/blog/wp-content/uploads/2014/11/Dog-and-Cat.jpg"
							alt="First slide"
						/>
						<Carousel.Caption style={{ fontSize: "30px" }}>
							<h3>Ellos son parte de tu familia!</h3>
							<p>Queremos que ellos sientan tu amor y cuidado</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://i.ytimg.com/vi/LFFNoyfjaMQ/maxresdefault.jpg"
							alt="Second slide"
						/>
						<Carousel.Caption style={{ fontSize: "30px" }}>
							<h3>Convierte tu amor por las mascotas en un ingreso extra!</h3>
							<p>Gana dinero por dedicarle tiempo a las mascotas de tu preferencia</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://img5.goodfon.com/wallpaper/nbig/3/b8/koshki-sobaki-rozovyi-fon-druzia-kompaniia-kot-koshka-sobaka.jpg"
							alt="Third slide"
						/>
						<Carousel.Caption style={{ color: "black", fontSize: "30px", textShadow: "2px 0 5px white" }}>
							<h3>Únete a nuestra familia</h3>
							<p>Registrate para brindar tus servicios a los amantes de las mascotas</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<Form>
				<Form className="searchForm">
					<Form.Row>
						<Form.Group as={Col} controlId="formGridState">
							<Form.Label>Busco</Form.Label>
							<Form.Control as="select" defaultValue="Choose...">
								<option>Paseos</option>
								<option>Hospedaje</option>
							</Form.Control>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridState">
							<Form.Label>En</Form.Label>
							<Form.Control as="select" defaultValue="Choose...">
								<option>San José</option>
								<option>Heredia</option>
								<option>Alajuela</option>
								<option>Guanacaste</option>
								<option>Cartago</option>
								<option>Puntarenas</option>
								<option>Limón</option>
							</Form.Control>
						</Form.Group>
					</Form.Row>
					<div>
						<Link to="/search">
							<Button className="btnSearch" variant="primary" type="submit">
								Buscar
								<i className="fas fa-search" />
							</Button>
						</Link>
					</div>
				</Form>
			</Form>
			<div className="jumboHome">
				<Jumbotron>
					<h1>Cómo funciona?</h1>
					<h2>
						Si eres amante de las mascotas pero no tienes el tiempo para dedicarles, puedes registrarte para
						obtener el servicio de nuestros Pet Buddies que se harán cargo de tu mascota y según lo desees,
						brindarle todas las atenciones que quieras.
					</h2>
					<br />
				</Jumbotron>
			</div>
			<SectionTab />
			<Info />
		</div>
	);
};
