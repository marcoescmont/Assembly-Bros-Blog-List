import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cards } from "../component/Cards";
import { Link } from "react-router-dom";

export const Home = () => (
	<div>
		<div>
			<h1>
				<Link to="/planets">
					<a className="color-dark">Planets</a>
				</Link>
			</h1>
			<div className="text-center mt-5">
				<Cards Text={"Ferrero"} Title={"Marco"} />
			</div>
		</div>
		<div>
			<h1>
				<Link to="/people">
					<a className="color-dark">People</a>
				</Link>
			</h1>
			<div className="text-center mt-5">
				<Cards Text={"Ferrero"} Title={"Marco"} />
			</div>
		</div>
		<div>
			<h1>
				<Link to="/vehicles">
					<a className="color-dark">Vehicles</a>
				</Link>
			</h1>
			<div className="text-center mt-5">
				<Cards Text={"Ferrero"} Title={"Marco"} />
			</div>
		</div>
	</div>
);
