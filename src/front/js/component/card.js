import React from "react";
import PropTypes from "prop-types";

import "../../styles/card.scss";

const Card = ({ buddy }) => {
	console.log(buddy);
	return (
		<div className="card card-buddy">
			<div className="card-body py-2 px-2">
				<div className="card-features d-flex">
					<img
						className="img-fluid card-img-profile mr-2"
						src="https://via.placeholder.com/60"
						alt="img-profile"
					/>
					<div className="card-info">
						<h6 className="card-name font-weight-bold">Jean Smith</h6>
						<div className="card-description">
							<p className="card-text font-weight-bold m-0">Amante de las mascotas</p>
							<span className="card-address d-block text-muted">
								<small>2.5 Km - San Pedro</small>
							</span>
						</div>
						<div className="card-rating">
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>☆</span> 10 Reseñas
						</div>
					</div>
					<div className="card-price text-center ml-auto">
						<small>
							Desde <span className="d-block font-weight-bold">USD 15</span>
						</small>
					</div>
				</div>
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
Card.propTypes = {
	buddy: PropTypes.object
};
