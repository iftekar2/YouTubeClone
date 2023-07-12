import React from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <section className="navSection">
      <div className="start">
        <div className="guidButton">
          <FontAwesomeIcon icon={faBars} className="faBars" />
        </div>
        <div className="logo">
          <img className="youtubeLogo" src="./Images/youtube.png" />
          <h2 className="title">YouTube</h2>
        </div>
      </div>

      <div className="center">
        <div className="searchBar">
          <input className="search" placeholder="Search"></input>
          <div className="searchIconDiv">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
