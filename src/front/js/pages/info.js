import React from "react";
import { Row, Col } from "react-bootstrap";

const Info = () => {
	return (
		<div className="middleImg">
			<Row>
				<Col md={12}>
					<div>
						<p>
							<h2>Dueños:</h2>
						</p>
						<p>
							¿Quieres viajar pero no sabes qué hacer con tu gato? ¿Necesitas hacer viajes de negocios y
							no puedes traer a tu perro? A veces no es suficiente tener a alguien en casa durante unos
							minutos para atender las necesidades básicas de nuestros seres queridos. A nuestros
							cuidadores de mascotas también les gusta viajar y les gustaría tener una mascota durante ese
							tiempo. Ábreles las puertas y disfruta de la tranquilidad de saber que tus gatos no se
							volverán locos solos mientras estás de vacaciones.
						</p>
					</div>
					<div>
						<p>
							<h2>Buddies:</h2>
						</p>
						<p>
							Te encantan los animales y siempre viviste con un gato o soñaste con tener un perro. Pero
							ahora no tienes el espacio ni el tiempo para cuidar de una mascota. Te ofrecemos la
							posibilidad de pasar momentos invaluables en compañía de una nueva mascota amiga. Nuestros
							anfitriones están felices de tener a alguien en quien puedan confiar para que cuide a sus
							mascotas mientras están de vacaciones, viajes de negocios o lo que sea que los deje en
							necesidad de un cuidador de mascotas.
						</p>
					</div>
				</Col>
			</Row>
		</div>
	);
};
export default Info;
