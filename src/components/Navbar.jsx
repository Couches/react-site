import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";

import "./navbar.css";

function Navbar(props)
{
  return (
    <nav className="top-navbar">
      <div className="nav-items"> { props.children } </div>
    </nav>
  );
}

function NavTitle(props)
{
  return (
    <div className="nav-item">
      <div>
        <NavLink to={props.to} className="nav-link"><span className="nav-title"> {props.text} </span> </NavLink>
      </div>
    </div>
  );
}

function NavItem(props)
{
  return (
    <div className="nav-item">
      <NavLink to={props.to} className="nav-link"> {props.text} </NavLink>
    </div>
  )
}



export { Navbar, NavItem, NavTitle };
