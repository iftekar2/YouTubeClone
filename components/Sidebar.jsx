import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMusic,
  faBook,
  faPodcast,
  faFilm,
  faGamepad,
  faTv,
  faBasketball,
  faShirt,
  faUserNinja,
  faMasksTheater,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

function Sidebar() {
  return (
    <div className="sidebarGuid">
      <div className="iconButton">
        <FontAwesomeIcon icon={faHouse} />
        <span className="home">Home</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={faMusic} />
        <span className="music">Music</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={faBook} />
        <span className="education">Education</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={faPodcast} />
        <span className="podcast">Podcast</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={faFilm} />
        <span className="movie">Movie</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={faGamepad} />
        <span className="game">Game</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={faTv} />
        <span className="live">Live</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={faBasketball} />
        <span className="sport">Sport</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={faShirt} />
        <span className="fashion">Fashion</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={faUserNinja} />
        <span className="beauty">Beauty</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={faMasksTheater} />
        <span className="comedy">Comedy</span>
      </div>
      <div className="iconButton">
        <FontAwesomeIcon icon={faDumbbell} />
        <span className="gym">Gym</span>
      </div>
    </div>
  );
}

export default Sidebar;
