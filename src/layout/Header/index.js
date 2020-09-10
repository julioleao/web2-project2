import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

export default function Header() {

  return (
    <nav className="l-header navbar navbar-expand-sm navbar-dark bg-primary">
      <NavLink to="/list" activeClassName="active" className="navbar-brand">
        Pokémon TCG
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/list" activeClassName="active" className="nav-link">
              Listar
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav ml-md-auto">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Ex. Charizard"
            aria-label="Search"
          />
          <button class="btn btn-outline-secondary mr-5" type="submit">
            Buscar
          </button>
        </form>
        <NavLink
          to="/login"
          activeClassName="active"
          className="nav-item mt-2 mr-3"
        >
          <i className="fa fa-user fa-2x" aria-hidden="true" />
        </NavLink>
      </ul>
    </nav>
  );
}
