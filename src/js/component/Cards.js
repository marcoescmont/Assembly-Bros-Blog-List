import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

export const Cards = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={props.Img} />
			<Card.Body>
				<Card.Title>{props.Title}</Card.Title>
				<Card.Text>{props.Text}</Card.Text>
				<Button variant="primary">Inspect</Button>
			</Card.Body>
		</Card>
	);
};
Cards.propTypes = {
	Text: PropTypes.string,
	Title: PropTypes.object,
	Img: PropTypes.string
};
