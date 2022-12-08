import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Longcard } from "../component/Card";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>StarWars Blog</h1>
		<div className ="row">
			<div className="col">
			<Longcard title="Go to Characters" title1="Characters" img="http://cdn.shopify.com/s/files/1/0190/5436/2724/articles/star_wars_personajes_1024x1024.jpg?v=1616087475"  route="/Characters" /> 
			</div>
			<div className="col">
			<Longcard title="Go to Planets" title1="Planets" img="https://reviewsyouread.files.wordpress.com/2021/03/10-more-star-wars-planets-as-countries.png"   route="/Planets"/>
			</div>
		</div>
	</div>
);
