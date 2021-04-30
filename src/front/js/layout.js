import React, { Profiler } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Resetpassword } from "./pages/resetpassword";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
//import { Info } from "./pages/info";
import { Footer } from "./component/footer";
import { Dashboard } from "./pages/dashboard";
import { Search } from "./pages/search";
import { ProfileBuddyView } from "./pages/profileBuddyView";
import { Owner_profile } from "./pages/owner_profile";

const Layout = () => {
	const basename = process.env.BASENAME || "";

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
						<Route exact path="/dashboard">
							<Dashboard />
						</Route>
						<Route exact path="/reset-password">
							<Resetpassword />
						</Route>
						<Route exact path="/search">
							<Search />
						</Route>
						<Route exact path="/buddy-profile">
							<ProfileBuddyView />
						</Route>
						<Route exact path="/owner-profile">
							{/* vista del perfil del owner */}
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
