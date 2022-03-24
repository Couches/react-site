import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

function Navigation() {
  return (
    <div className="header">
      <ul className="nav-list">
        <li className="list-item">
          <Link to="/" className="nav-link">
          <span className="header-title">robert de lappe.</span>
          </Link>
        </li>
        <li className="list-item">
          <Link to="/projects" className="nav-link">
            projects
          </Link>
        </li>
        <li className="list-item">
          <Link to="/about" className="nav-link">
            about
          </Link>
        </li>
        <li className="list-item">
          <Link to="/contact" className="nav-link">
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
