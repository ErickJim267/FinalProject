import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "./store/appContext";

const PrivateRoute = ({ children, ...rest }) => {
	const { store } = React.useContext(Context);
	console.log(store.token);
	return <Route {...rest} render={() => (store.token ? children : <Redirect to="/" />)} />;
};

export default PrivateRoute;
