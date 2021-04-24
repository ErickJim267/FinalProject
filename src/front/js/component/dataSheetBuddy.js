import React from "react";

const DataSheetBuddy = () => {
	return (
		<div className="data-sheet-buddy">
			<div className="row">
				<div className="col-md-4 d-flex justify-content-center py-4">
					<img
						className="photo-buddy rounded-circle img-fluid"
						src="https://via.placeholder.com/250"
						alt="photo-buddy"
						style={{ width: "250px", height: "250px" }}
					/>
				</div>
				<div className="col-md-8 d-flex align-items-center py-4">
					<div className="description-buddy">
						<div className="info-buddy">
							<h1 className="name-buddy font-weight-bold">Jean Smith</h1>
							<h5 className="address d-block">
								<small className="font-weight-bold text-gray">2.5 Km - San Pedro, San Jose, CR</small>
							</h5>
							<div className="card-rating">
								<span>★</span>
								<span>★</span>
								<span>★</span>
								<span>★</span>
								<span>☆</span>
								<p className="d-inline ml-3 p-0">9 Reviews</p>
							</div>
						</div>
						<div className="btn-contact-group mt-4">
							<div className="btn btn-info btn-lg mr-3">Contáctame</div>
							<div className="btn btn-success btn-lg text-light font-weight-bold rounded-circle ">
								&#9825;
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataSheetBuddy;
