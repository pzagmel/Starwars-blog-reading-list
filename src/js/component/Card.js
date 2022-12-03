import React from "react";
import { Link } from "react-router-dom";

export const Longcard = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        
      </div>
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
