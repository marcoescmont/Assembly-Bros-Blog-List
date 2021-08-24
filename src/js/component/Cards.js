import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
import { Context } from "../store/appContext.js";

export const Cards = props => {
	const [found, setFound] = useState(false);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		let position = store.favorites.find(item => item == props.Title);
		if (position) {
			setFound(true);
		} else {
			setFound(false);
		}
	});

	const handleFavorite = favorite => {
		actions.addFavorite(favorite);
	};

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
			/>
			<Card.Body>
				<Card.Title>{props.Title}</Card.Title>
				<Card.Text>
					<span>{props.Text}</span> <br />
					<span>{props.Text2}</span> <br />
					<span>{props.Text3}</span> <br />
					<span>{props.Text4}</span>
				</Card.Text>
				<Link to={`${props.type}/${props.index}`}>
					<Button variant="outline-primary" className="float-left">
						Learn More!
					</Button>
				</Link>
				<Button variant="outline-warning" className="float-right" onClick={() => handleFavorite(props.Title)}>
					{found ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
				</Button>
			</Card.Body>
		</Card>
	);
};
Cards.propTypes = {
	Text: PropTypes.string,
	Text2: PropTypes.string,
	Text3: PropTypes.string,
	Text4: PropTypes.string,
	Title: PropTypes.string,
	Img: PropTypes.string,
	index: PropTypes.number,
	type: PropTypes.string
};
