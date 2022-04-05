import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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

function DropdownButton(props)
{
  const [open, setOpen] = useState(false);

  return (
      <div>
        <a href="#" className="dropdown-icon" onClick={() => setOpen(!open)}> 
          {props.text} 
        </a>

        {open && props.children}
      </div>
  )
}

function DropdownMenu()
{
  function DropdownItem(props)
  {
    return (
      <div className="nav-item">
        <NavLink to={props.to} className="nav-link"> {props.text} </NavLink>
      </div>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem to="/projects" text="projects"/>
      <DropdownItem to="/about" text="about"/>
      <DropdownItem to="/contact" text="contact"/>
    </div>
  );
}

export { Navbar, NavItem, NavTitle, DropdownButton, DropdownMenu };
