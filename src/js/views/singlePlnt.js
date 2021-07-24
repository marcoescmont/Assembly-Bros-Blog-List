import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlnt = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">{store.planets[params.theid].name}</h1>
			{store.planets[params.theid].rotation_period}

			<hr className="my-4" />

			<Link to="/planets">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back
				</span>
			</Link>
		</div>
	);
};

SinglePlnt.propTypes = {
	match: PropTypes.object
};
