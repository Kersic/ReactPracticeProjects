import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ dogs }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/dogs">
        Dog App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/dogs" className="nav-link">
              Home
            </NavLink>
          </li>
          {dogs.map(dog => (
            <li className="nav-item" key={dog.name}>
              <NavLink exact to={`/dogs/${dog.name}`} className="nav-link">
                {dog.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
