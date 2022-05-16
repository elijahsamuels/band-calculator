import React from "react";
import styles from "./navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar">
      <NavLink to="/">Home</NavLink>
      {" - "}
      <NavLink to="/about">About</NavLink>
      {" - "}
      {/* <NavLink to="/spreadsheet">Spreadsheet</NavLink> */}
      {/* {" - "} */}
      <NavLink to="/calculator">Calculator</NavLink>
      {/* {" - "} */}
      {/* <NavLink to="/bandcalculator">Band Calc</NavLink> */}
    </header>
  );
}

export default NavBar;
