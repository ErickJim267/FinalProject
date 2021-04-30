import React from "react";

const CardServices = () => {
	return (
		<div className="card border-0 color-card">
			<div className="card-body">
				<h3 className="font-weight-bold">Servicios</h3>
				<div className="service-description my-3 d-flex justify-content-between">
					<div className="service-category">
						<span className="font-weight-bold">Alojamiento</span>
						<span className="d-block">
							<small>Es un hotel de mascotas</small>
						</span>
					</div>
					<div className="service-price text-center">
						<span className="font-weight-bold">$20</span>
						<small className="d-block">por noche</small>
					</div>
				</div>
				<div className="service-description my-3 d-flex justify-content-between">
					<div className="service-category">
						<span className="font-weight-bold">Guardería</span>
						<span className="d-block">
							<small>Es un hotel de mascotas</small>
						</span>
					</div>
					<div className="service-price text-center">
						<span className="font-weight-bold">$20</span>
						<small className="d-block">por noche</small>
					</div>
				</div>
				<div className="btn btn-info btn-block text-uppercase">Reservar</div>
			</div>
		</div>
	);
};

export default CardServices;
