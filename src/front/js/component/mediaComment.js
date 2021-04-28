import React from "react";

const MediaComment = () => {
	return (
		<div className="media my-4">
			<img src="https://via.placeholder.com/65" className="align-self-start mr-3" alt="" />
			<div className="media-body">
				<div className="media-body-talk">
					<div className="review-header d-flex  justify-content-between align-items-center">
						<h6>
							<span className="font-weight-bold">Joseph, </span>
							<span className="date-review">20 Ago 2019</span>
						</h6>
						<div className="card-rating">
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>☆</span>
						</div>
					</div>
					<p className="m-0">
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
						purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
						vulputate fringilla. Donec lacinia congue felis in faucibus.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MediaComment;
