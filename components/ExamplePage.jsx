import React from "react";
import "./Style.css";

function ExamplePage() {
  return (
    <section className="ExampleSection">
      <div className="examplePage">
        <div className="exampleDiv">
          <div className="exampleOne">
            <img src="../Images/biceps.png" />
            <div className="workoutName">
              <h1>Biceps</h1>
            </div>
          </div>
        </div>

        <div className="exampleDiv">
          <div className="exampleTwo">
            <img src="../Images/chest.png" />
            <div className="workoutName">
              <h1>Chest</h1>
            </div>
          </div>
        </div>

        <div className="exampleDiv">
          <div className="exampleThree">
            <img src="../Images/abdominals.png" />
            <div className="workoutName">
              <h1>Abdominals</h1>
            </div>
          </div>
        </div>

        <div className="exampleDiv">
          <div className="exampleFour">
            <img src="../Images/quads.png" />
            <div className="workoutName">
              <h1>Quads</h1>
            </div>
          </div>
        </div>

        <div className="exampleDiv">
          <div className="exampleFive">
            <img src="../Images/lats.png" />
            <div className="workoutName">
              <h1>Lats</h1>
            </div>
          </div>
        </div>

        <div className="exampleDiv">
          <div className="exampleSix">
            <img src="../Images/hamstrings.png" />
            <div className="workoutName">
              <h1>Hamstrings</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExamplePage;
