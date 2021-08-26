import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cards } from "../component/Cards";
import { Link } from "react-router-dom";
import { Col, Form } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="image py-3 mx-auto">
			<h1 className="text-white text-center">
				WELCOME!! MAY THE FORCE BE WITH YOU IN YOUR LOGIN
				<i className="fab fa-jedi-order" />
				<Col sm="3" className="mx-auto">
					<Form.Control type="text" placeholder="username" />
				</Col>
				<Col sm="3" className="mx-auto">
					<Form.Control type="password" placeholder="Password" />
				</Col>
				<button className="btn btn-primary mr-3" type="submit">
					Login
				</button>
			</h1>
		</div>
	);
};
