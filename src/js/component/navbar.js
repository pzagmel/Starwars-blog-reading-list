import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';

export const Navbar = () => {
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
		<li className="dropdown-item">personaje1 <FaTrashAlt/></li>
		<li className="dropdown-item">personaje2 <FaTrashAlt/></li>
		</ul>
      </div>
    </nav>
  );
};
