import React from "react";

function AboutPage() {
  return (
    <section className="AboutSection">
      <div className="aboutPage">
        <div className="aboutOne">
          <img src="../Images/aboutOne.jpg" />
          <div className="aboutOneInfo">
            <h1 className="aboutOneTitle">Endless Workouts to Choose From</h1>
            <p className="aboutOneDescription">
              Browse through our extensive workout library and find the perfect
              routine to meet your goals and challenge your body.
            </p>
          </div>
        </div>
        <div className="aboutTwo">
          <div className="aboutTwoInfo">
            <h1 className="aboutTwoTitle">Train with Our Incredible Team</h1>
            <p className="aboutTwoDescription">
              Every traning is made by our incredible team, our team will
              guiding every step of your workout journey, ensuring precision and
              efficiency in every exercise.
            </p>
          </div>
          <img src="../Images/aboutTwo.jpg" />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
