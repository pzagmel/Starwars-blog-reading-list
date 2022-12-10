import React from "react";
import { Link } from "react-router-dom";

export const Longcard = (props) => {
  return (
    <div className="card">
     
      <div className="card-body">
        <h5 className="card-title"> {props.title1} </h5>
        <div className="card-img">
        <img src={props.img} style={{"width":"500px","height":"350px"}} />
        </div>
        <Link to={props.route}>
          <a className="btn btn-primary my-3"> {props.title} </a>
        </Link>
      </div>
    </div>
  );
};
export const Card = ({ title, route, description }) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src= "https://dlprivateserver.com/wp-content/uploads/2022/08/%C2%BFTerminara-alguna-vez-Star-Wars.jpg" className="card-img-top" alt="..." />
      <div className="card-body"> 
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="row">
          <div className="col-8">
        <Link to={route}>
          <a className="btn btn-outline-primary"> More details!</a>
          </Link>
          </div>
          <div className="col-4">
          <button className="btn btn-outline-warning" 
          //onClick={() =>
          //        }
               
               >❤️</button>   
          </div>
        </div>
      </div>
    </div>
  );
};

//aqui hook useState para agregar a favoritos