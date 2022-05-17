import React from "react";
// import styles from "./navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar">
      <NavLink to="/" className={"navbar link"}>
        Home
      </NavLink>
      <NavLink to="/about" className={"navbar link"}>
        About
      </NavLink>
      {/* <NavLink to="/spreadsheet" className={"navbar-link"}>Spreadsheet</NavLink> */}
      {/* {" - "} */}
      <NavLink to="/calculator" className={"navbar link"}>
        Calculator
      </NavLink>
      {/* {" - "} */}
      {/* <NavLink to="/bandcalculator" className={"navbar-link"}>Band Calc</NavLink> */}
    </header>
  );
}

export default NavBar;
