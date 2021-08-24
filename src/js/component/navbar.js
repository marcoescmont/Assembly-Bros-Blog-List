import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleFavorite = favorite => {
		actions.addFavorite(favorite);
	};

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
				<DropdownButton
					align="end"
					title={`Favorites (${store.favorites.length})`}
					id="dropdown-menu-align-right"
					variant="success">
					{store.favorites.map((item, index) => {
						return (
							<Dropdown.Item key={index} eventKey={index}>
								{item}{" "}
								<button onClick={() => handleFavorite(item)} className="btn btn-danger float-right">
									<i className="fas fa-trash-alt" />
								</button>
							</Dropdown.Item>
						);
					})}
				</DropdownButton>
			</div>
		</nav>
	);
};
