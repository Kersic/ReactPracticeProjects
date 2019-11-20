import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink exact activeClassName="active-link" to="/" className="NavLink">
        Home
      </NavLink>
      <NavLink
        exact
        activeClassName="active-link"
        to="/subPage1"
        className="NavLink"
      >
        SubPage1
      </NavLink>
      <NavLink
        exact
        activeClassName="active-link"
        to="/subPage2"
        className="NavLink"
      >
        subPage2
      </NavLink>
      <NavLink
        exact
        activeClassName="active-link"
        to="/subPage3"
        className="NavLink"
      >
        subPage3
      </NavLink>
      <hr />
    </nav>
  );
}

export default Navbar;
