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
          <img className="youtubeLogo" src="../Images/youtubeLogo.png" />
        </div>
      </div>

      <div className="center">
        <div className="searchBar">
          <input
            className="searchBox"
            id="searchBox"
            placeholder="Search"
          ></input>
          <div className="searchIconDiv">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
