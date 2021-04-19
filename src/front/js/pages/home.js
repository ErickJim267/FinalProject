import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Jumbotron, Button, Carousel, ButtonGroup } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div>
				<div id="imgHomeContainer" />
				<Carousel fade>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="http://www.petsworld.in/blog/wp-content/uploads/2014/11/Dog-and-Cat.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
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
						<Carousel.Caption>
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
						<Carousel.Caption style={{ color: "black" }}>
							<h3>Únete a nuestra familia</h3>
							<p>Registrate para brindar tus servicios a los amantes de las mascotas</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<div className="jumboHome">
				<Jumbotron>
					<h1>Cómo funciona?</h1>
					<p>
						Inicialmente, si eres amante de las mascotas caseras pero no tienes el tiempo para darles el
						cuidado apropiado así como ellos lo merecen, puedes registrarte para obtener el servicio de
						nuestros Pet Buddies que se harán cargo de tu mascota y según lo desees, brindarle todos los
						mimos.
					</p>
					<div>
						<ButtonGroup>
							<Button variant="transparent" style={{ padding: "10px" }}>
								Dueño
							</Button>

							<Button variant="transparent" style={{ padding: "10px" }}>
								Buddy
							</Button>
						</ButtonGroup>
					</div>
				</Jumbotron>
			</div>
			<div className="middleImg">
				<div>
					<h1>Hola soy middleImg</h1>
				</div>
			</div>
			<div>
				<p />
			</div>
		</div>
	);
};
