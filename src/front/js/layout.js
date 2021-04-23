import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Home } from "./pages/home";
import { Footer } from "./component/footer";
import { Owner_profile } from "./pages/owner_profile";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/owner_profile">
							<Owner_profile />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						{/*Acá crearemos las rutas para los formularios Register y Login
                        <Route exact path = "/register"
                            <Register />
                        </Route>
                        <Route exact path = "/login"
                            <Login />
                        </Route>
                         <Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route> 
						<Route>
							<SectionTab />
						</Route>
						<Route>
							<Info />
						</Route>*/}
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
