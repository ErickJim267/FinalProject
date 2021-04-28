import React from "react";
import Card from "../component/card";
import { Link } from "react-router-dom";
import FormSearch from "../component/formSearch";

const Search = () => {
	return (
		<div className="container-fluid py-2 my-5">
			<FormSearch />
			<div className="row mt-3">
				<div className="col-md-7">
					<div className="row row-cols-2">
						<div className="col-md-6 mb-3 px-2">
							<Link to="/" className="text-decoration-none text-reset">
								<Card />
							</Link>
						</div>
						<div className="col-md-6 mb-3 px-2">
							<Link to="/" className="text-decoration-none text-reset">
								<Card />
							</Link>
						</div>
					</div>
				</div>
				<div className="col-md-5 text-center border">SOY EL MAPA </div>
			</div>
		</div>
	);
};

export default Search;

// Search.propTypes = {
// 	match: PropTypes.object
// };
