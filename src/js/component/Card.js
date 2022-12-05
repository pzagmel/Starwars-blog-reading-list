import React from "react";
import { Link } from "react-router-dom";

export const Longcard = (props) => {
  return (
    <div className="card">
      <div className="card-header"></div>
      <div className="card-body">
        <h5 className="card-title"> Special title treatment </h5>
        <p className="card-text">
          With supporting text below as a natural lead - in to additional
          content.
        </p>
        <Link to={props.ruta}>
          <a className="btn btn-primary"> {props.titulo} </a>
        </Link>
      </div>
    </div>
  );
};

export const Card = ({ titulo, ruta, descripcion }) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src= "https://dlprivateserver.com/wp-content/uploads/2022/08/%C2%BFTerminara-alguna-vez-Star-Wars.jpg" className="card-img-top" alt="..." />
      <div className="card-body"> 
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <div className="row">
          <div className="col-8">
        <Link to={ruta}>
          <a className="btn btn-outline-primary"> More details!</a>
          </Link>
          </div>
          <div className="col-4">
          <button className="btn btn-outline-warning">❤️</button>
          </div>
        </div>
      </div>
    </div>
  );
};