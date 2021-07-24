import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cards } from "../component/Cards";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div>
			<div>
				<h1>
					<Link to="/planets">
						<a className="text-dark">Planets</a>
					</Link>
				</h1>
				<div className="text-center mt-5 d-flex justify-content-around">
					{/* {store.planets.map((item, index) => {
						return <Cards key={index} Text={"Ferrero"} Title={item.name} />;
					})} */}
				</div>
				<div className="text-center mt-5 d-flex justify-content-around">
					<Cards Text={"Ferrero"} Title={"Marco"} />
					<Cards Text={"Ferrero"} Title={"Marco"} />
					<Cards Text={"Ferrero"} Title={"Marco"} />
				</div>
			</div>
			<div>
				<h1>
					<Link to="/people">
						<a className="text-dark">People</a>
					</Link>
				</h1>
				<div className="text-center mt-5 d-flex justify-content-around">
					<Cards Text={"Ferrero"} Title={"Marco"} />
					<Cards Text={"Ferrero"} Title={"Marco"} />
					<Cards Text={"Ferrero"} Title={"Marco"} />
				</div>
				<div className="text-center mt-5 d-flex justify-content-around">
					<Cards Text={"Ferrero"} Title={"Marco"} />
					<Cards Text={"Ferrero"} Title={"Marco"} />
					<Cards Text={"Ferrero"} Title={"Marco"} />
				</div>
			</div>
			<div>
				<h1>
					<Link to="/vehicles">
						<a className="text-dark">Vehicles</a>
					</Link>
				</h1>
				<div className="text-center mt-5 d-flex justify-content-around">
					<Cards Text={"Ferrero"} Title={"Marco"} />
					<Cards Text={"Ferrero"} Title={"Marco"} />
					<Cards Text={"Ferrero"} Title={"Marco"} />
				</div>
				<div className="text-center mt-5 d-flex justify-content-around">
					<Cards Text={"Ferrero"} Title={"Marco"} />
					<Cards Text={"Ferrero"} Title={"Marco"} />
					<Cards Text={"Ferrero"} Title={"Marco"} />
				</div>
			</div>
		</div>
	);
};
