import React, { Profiler } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Resetpassword } from "./pages/resetpassword";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Dashboard } from "./pages/dashboard";
import ProfileBuddyView from "./pages/profileBuddyView";
import Owner_profile from "./pages/owner_profile";
import Search from "./pages/search";
import PrivateRoute from "./privateRoute";

import { Context } from "./store/appContext";
import Notifications from "./pages/notifications";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	const { store } = React.useContext(Context);

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						{/* Ruta protegida */}
						<PrivateRoute exact path="/dashboard">
							<Dashboard />
						</PrivateRoute>
						<PrivateRoute exact path="/notifications">
							<Notifications />
						</PrivateRoute>
						<Route exact path="/reset-password">
							<Resetpassword />
						</Route>
						<Route exact path="/search">
							<Search />
						</Route>
						<Route exact path="/buddy-profile/:id">
							<ProfileBuddyView />
						</Route>
						<Route exact path="/owner-profile/:id">
							<Owner_profile />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
