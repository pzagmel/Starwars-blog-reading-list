import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
          style={{ width: "160px", height: "100px" }}
        />
      </Link>
      <div className="btn-group dropstart">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu">
          {console.log(store.favorites)}
          {store.favorites.map((value, index) => {
            return (
              <li key={index} className="dropdown-item">
                {value.name}
                <FaTrashAlt
                  onClick={() => {
                    actions.deleteFav(value.id);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
