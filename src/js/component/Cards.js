import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

export const Cards = props => {
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
				<Button variant="primary">Inspect</Button>
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
	Img: PropTypes.string
};
