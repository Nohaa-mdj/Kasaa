import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo.png" alt="logo kasa" />
      </div>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about">A propos</NavLink>
    </nav>
  );
}

export default Navbar;
