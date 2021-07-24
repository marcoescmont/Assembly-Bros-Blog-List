import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cards } from "../component/Cards";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div>
				<h1>
					<Link className="text-decoration-none" to="/planets">
						<span className="text-dark">Planets</span>
					</Link>
				</h1>
				<div className="text-center mt-5 d-flex justify-content-around">
					{store.planets.map((item, index) => {
						return (
							<Cards
								key={index}
								Text={"Climate: " + item.climate}
								Text2={"Diameter: " + item.diameter}
								Text3={"Orbital Period: " + item.orbital_period}
								Text4={"Population: " + item.population}
								Title={item.name}
							/>
						);
					})}
				</div>
			</div>
			<div className="mt-2">
				<h1>
					<Link className="text-decoration-none" to="/people">
						<span className="text-dark">People</span>
					</Link>
				</h1>
				<div className="text-center mt-5 d-flex justify-content-around">
					{store.people.map((item, index) => {
						return (
							<Cards
								key={index}
								Text={"Height: " + item.height}
								Text2={"Weigth: " + item.mass}
								Text3={"Birth Year: " + item.birth_year}
								Title={item.name}
							/>
						);
					})}
				</div>
			</div>
			<div className="mt-2">
				<h1>
					<Link className="text-decoration-none" to="/vehicles">
						<span className="text-dark">Vehicles</span>
					</Link>
				</h1>
				<div className="text-center mt-5 d-flex justify-content-around">
					{store.vehicles.map((item, index) => {
						return (
							<Cards
								key={index}
								Text={"Model: " + item.model}
								Text2={"Manufacturer: " + item.manufacturer}
								Title={item.name}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
