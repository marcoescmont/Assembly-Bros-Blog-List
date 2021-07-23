import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<h1 className="navbar-brand mb-0">
					<i className="fab fa-jedi-order" />
					Star Wars
					<i className="fab fa-galactic-republic" />
				</h1>
			</Link>
			<div className="ml-auto">
				<Link to="/vehicles">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
