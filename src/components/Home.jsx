import React from "react";
import Navigation from "./Navigation";
import "./home.css";

function Home() {
  return (
    <div className="page-content">
      <Navigation />
      <h3 className="content-header">home</h3>
      <div className="content-container">
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, in!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, est
          quo odio fugit quis delectus. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Cupiditate aperiam ipsum sequi magni id at.
        </span>
      </div>
    </div>
  );
}

export default Home;
