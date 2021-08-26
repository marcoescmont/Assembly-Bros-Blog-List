import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cards } from "../component/Cards";
import { Link } from "react-router-dom";
import { Col, Form } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="image py-3 mx-auto">
			<h1 className="text-white text-center">
				WELCOME!! MAY THE FORCE BE WITH YOU IN YOUR LOGIN
				<i className="fab fa-jedi-order" />
				<form
					className="form-inline d-flex justify-content-center"
					onSubmit={e => {
						actions.login(username, password);
						e.preventDefault();
					}}>
					<div className="form-group mb-2">
						<input
							type="text"
							className="form-control"
							placeholder="Username"
							onChange={e => setUsername(e.target.value)}
							value={username}
						/>
					</div>
					<div className="form-group mx-sm-3 mb-2">
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							onChange={e => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<Link to="/home">
						<button type="submit" className="btn btn-primary mb-2" value="Log in">
							Login
						</button>
					</Link>
				</form>
			</h1>
		</div>
	);
};
