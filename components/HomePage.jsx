import React from "react";
import "./Style.css";

function HomePage() {
  return (
    <section className="HomePageSection">
      <div className="homePage">
        <div className="homePageIcons">
          <div className="firstImage">
            <img src="../Images/barbell.png"></img>
          </div>
          <div className="secondImage">
            <img src="../Images/dumbbell.png"></img>
          </div>
          <div className="thirdImage">
            <img src="../Images/healthy.png"></img>
          </div>
          <div className="forthImage">
            <img src="../Images/treadmill.png"></img>
          </div>
          <div className="fifthImage">
            <img src="../Images/weightlifting.png"></img>
          </div>
        </div>
        <div className="HomeTitle">
          <h1>FITZONE</h1>
        </div>
        <div className="slogan">
          <p>Improve</p>
          <p className="dot">·</p>
          <p>Elevate</p>
          <p className="dot">·</p>
          <p>Excelerate</p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
