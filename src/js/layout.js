import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Planets } from "./views/Planets";
import { Vehicles } from "./views/Vehicles";
import { People } from "./views/People";
import { SingleVcl } from "./views/singleVcl";
import { SinglePpl } from "./views/singlePpl";
import { SinglePlnt } from "./views/singlePlnt";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/vehicle">
							<Vehicles />
						</Route>
						<Route exact path="/character">
							<People />
						</Route>
						<Route exact path="/planet">
							<Planets />
						</Route>
						<Route exact path="/singleVcl/:theid">
							<SingleVcl />
						</Route>
						<Route exact path="/singlePpl/:theid">
							<SinglePpl />
						</Route>
						<Route exact path="/singlePlnt/:theid">
							<SinglePlnt />
						</Route>
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
