import React, { Component, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, NavItem, NavTitle, DropdownButton, DropdownMenu } from "./components/Navbar";
import { FiMoreHorizontal } from "react-icons/fi";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <>
      <Navbar>
        <NavTitle to="/" text="robert de lappe"/>

        <div className="item-menu">
          <NavItem to="/projects" text="projects"/>
          <NavItem to="/about" text="about"/>
          <NavItem to="/contact" text="contact"/>
        </div>

        <div className="dropdown-button">
          <DropdownButton to="*" text={<FiMoreHorizontal/>}>
            <DropdownMenu/>
          </DropdownButton>
        </div>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </>
    );
  }
}

export default App;
