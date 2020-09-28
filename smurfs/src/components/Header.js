import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";
export default function Header() {
  return (
    <header>
      <NavLink to="/">Smurfs</NavLink>
    </header>
  );
}
