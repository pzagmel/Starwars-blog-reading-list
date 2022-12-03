import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Longcard } from "../component/Card";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>StarWars Blog!</h1>
		<div className ="row">
			<Longcard titulo="ir a los personajes" ruta="/Personajes" />
			<Longcard titulo="ir a los planetas" ruta="/Planetas"/>
		</div>
	</div>
);
