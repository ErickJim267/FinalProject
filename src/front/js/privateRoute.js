import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "./store/appContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { store } = React.useContext(Context);
	console.log(store.token);
	return (
		<Route
			{...rest}
			render={routeProps =>
				store.token ? (
					<Component {...routeProps} />
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: routeProps.location }
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
