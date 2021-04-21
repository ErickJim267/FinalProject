import React from "react";
import Card from "../component/card";
import { Link } from "react-router-dom";
import FormSearch from "../component/formSearch";
// import FormSearch from "../component/formSearch";

const Search = () => {
	return (
		<div className="container-fluid border h-100 py-2">
			<FormSearch />
			<div className="row">
				<div className="col-md-4">{/* <FormSearch /> */}</div>
				<div className="col-md-8">
					<div className="row">
						<div className="col-md-5">
							{/* <Link to="/" className="text-decoration-none text-reset">
								<Card />
							</Link> */}
						</div>
						<div className="col-md-7">{/* Aqui va el mapa */}</div>
					</div>
					{/* <div className="row">
						<div className="col-md-12"></div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Search;

// Search.propTypes = {
// 	match: PropTypes.object
// };
