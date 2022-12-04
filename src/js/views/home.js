import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Longcard } from "../component/Card";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>StarWars Blog!</h1>
		<div className ="row">
			<Longcard titulo="Go to Characters" ruta="/Characters" />
			<Longcard titulo="Go to Planets" ruta="/Planets"/>
		</div>
	</div>
);
