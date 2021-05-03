import React from "react";
import Card from "../component/card";
import { Link } from "react-router-dom";
import FormSearch from "../component/formSearch";
import { Context } from "../store/appContext";

const Search = () => {
	const { store, actions } = React.useContext(Context);

	React.useEffect(() => {
		actions.getAllBuddies();
	}, []);

	return (
		<div className="container-fluid py-2 my-5">
			<FormSearch />
			<div className="row mt-3">
				<div className="col-md-10 border">
					<div className="row row-cols-2">
						{/* {store.buddyList > 0 &&
							store.buddylist.map(item => {
								<div className="col-md-6 mb-3 px-2">
									<Link
										to={`/owner-profile/${item.buddy.id}`}
										className="text-decoration-none text-reset">
										<Card key={item.buddy.id} buddy={item.buddy} />
									</Link>
								</div>;
							})} */}
						<div className="col-md-3 mb-3 px-2">
							<Link to="/buddy-profile/1" className="text-decoration-none text-reset">
								<Card />
							</Link>
						</div>
						<div className="col-md-3 mb-3 px-2">
							<Link to="/buddy-profile/2" className="text-decoration-none text-reset">
								<Card />
							</Link>
						</div>
						<div className="col-md-3 mb-3 px-2">
							<Link to="/buddy-profile/3" className="text-decoration-none text-reset">
								<Card />
							</Link>
						</div>
					</div>
				</div>
				{/* <div className="col-md-5 text-center border">SOY EL MAPA </div> */}
			</div>
		</div>
	);
};

export default Search;
