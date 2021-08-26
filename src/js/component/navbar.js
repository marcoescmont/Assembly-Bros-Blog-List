import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown, Col, Form } from "react-bootstrap";
import { Context } from "../store/appContext.js";
import "../../styles/home.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleFavorite = favorite => {
		actions.addFavorite(favorite);
	};

	return (
		<nav className="navbar navbar-light bg-dark">
			<Link to="/home">
				<img className="resize" src="https://img.icons8.com/ios/452/star-wars.png" />
			</Link>
			<div className="d-flex justify-content-end">
				<Link to="/">
					<button type="submit" className="btn btn-primary mb-2" value="Log in">
						Login
					</button>
				</Link>
				<DropdownButton
					align="end"
					title={`Favorites (${store.favorites.length})`}
					id="dropdown-menu-align-right"
					variant="danger">
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
