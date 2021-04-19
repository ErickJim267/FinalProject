import React from "react";
import "../../styles/card.scss";

const Card = () => {
	return (
		<div className="card">
			<div className="card-body py-2 px-2">
				<div className="card-features d-flex justify-content-between">
					<img src="" alt="" />
					<div className="card-info">
						<h5 className="card-name font-weight-bold">Jean Smith</h5>
						<h6 className="card-description">
							<strong>Amante de las mascotas por siempre</strong>
							<span className="card-address d-block text-muted">
								<small>2.5 Km - San Pedro</small>
							</span>
						</h6>
						<div className="card-rating">
							<span className="icon-rating mr-2">*****</span>
							15 Reseñas
						</div>
					</div>
					<div className="card-price ml-5 text-center">
						<small>
							Desde <span className="d-block">USD 15</span>
						</small>
					</div>
				</div>{" "}
				{/* .card-features */}
				<div className="card-comment">
					<div className="card-review">
						<strong>Review: </strong>
						<small>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus non ducimus labore
							totam nihil modi voluptate!
						</small>
					</div>
					<div className="card-available d-flex justify-content-between px-2 py-1 font-weight-bold">
						<span className="card-text-available">Disponible</span>
						<span className="card-text-date">15 Ago - 18 Ago</span>
					</div>
				</div>{" "}
				{/* .card-comment */}
			</div>
		</div>
	);
};

export default Card;
