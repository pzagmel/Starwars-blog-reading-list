import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Detailsplanet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState({});
  
  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlanet(data.result);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="https://www.famousbollywood.com/wp-content/uploads/2021/05/Best-Planets-to-Live-on-in-Star-Wars.jpg" width={500} />
          </div>
         <div className="col">
            <h1>{planet?.properties?.name}</h1>
            <p>{planet?.description}</p>
          </div>
        </div>
      </div>
      <table className="table my-5">
        <thead>
          <tr>
            <th scope="col">Diameter</th>
            <th scope="col">Rotation Period</th>
            <th scope="col">Orbital_Period</th>
            <th scope="col">Gravity</th>
            <th scope="col">Population</th>
            <th scope="col">Climate</th>
            <th scope="col">Terrain</th>
          </tr>
        </thead>
        <tbody>
          <tr>            
            <td>{planet?.properties?.diameter}</td>
            <td>{planet?.properties?.rotation_period}</td>
            <td>{planet?.properties?.orbital_period}</td>
            <td>{planet?.properties?.gravity}</td>
            <td>{planet?.properties?.population}</td>
            <td>{planet?.properties?.climate}</td>
            <td>{planet?.properties?.terrain}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
