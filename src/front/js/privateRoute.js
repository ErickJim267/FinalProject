import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "./store/appContext";

const PrivateRoute = ({ children, ...rest }) => {
	const { store } = React.useContext(Context);
	console.log(store.token);
	return (
		<Route
			{...rest}
			render={ ({location}) =>
				store.token ? (
					children
				) : (
					<Redirect to="/"
					// <Redirect to= {{
					// 	pathname: "/",
              		// 	state: { from: location }
					// }}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
