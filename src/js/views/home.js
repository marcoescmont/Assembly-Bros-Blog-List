import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cards } from "../component/Cards";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="image py-3">
			<div>
				<h1>
					<Link className="text-decoration-none" to="/planet">
						<span className="text-white">Planets</span>
					</Link>
				</h1>
				<div className="text-center mt-5 d-flex justify-content-around">
					{store.planets.map((item, index) => {
						return (
							<Cards
								key={index}
								index={index}
								type={"singlePlnt"}
								Text={"Climate: " + item.climate}
								Text2={"Diameter: " + item.diameter}
								Text3={"Orbital Period: " + item.orbital_period}
								Text4={"Population: " + item.population}
								Title={item.name}
								Img={"https://exoplanets.nasa.gov/internal_resources/116"}
							/>
						);
					})}
				</div>
			</div>
			<div className="mt-2">
				<h1>
					<Link className="text-decoration-none" to="/character">
						<span className="text-white">People</span>
					</Link>
				</h1>
				<div className="text-center mt-5 d-flex justify-content-around">
					{store.people.map((item, index) => {
						return (
							<Cards
								key={index}
								index={index}
								type={"singlePpl"}
								Text={"Height: " + item.height}
								Text2={"Weight: " + item.weight}
								Text3={"Birth Year: " + item.birth_year}
								Title={item.name}
								Img={"https://wallpaperaccess.com/full/368503.jpg"}
							/>
						);
					})}
				</div>
			</div>
			<div className="mt-2">
				<h1>
					<Link className="text-decoration-none" to="/vehicle">
						<span className="text-white">Vehicles</span>
					</Link>
				</h1>
				<div className="text-center mt-5 d-flex justify-content-around">
					{store.vehicles.map((item, index) => {
						return (
							<Cards
								key={index}
								index={index}
								type={"singleVcl"}
								Text={"Model: " + item.model}
								Text2={"Manufacturer: " + item.manufacturer}
								Title={item.name}
								Img={
									"https://static.planetminecraft.com/files/resource_media/screenshot/1423/starwarsvehiclescollection.jpg"
								}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
