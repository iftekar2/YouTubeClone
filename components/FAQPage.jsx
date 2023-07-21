import React from "react";
import "./Style.css";

function FAQPage() {
  return (
    <section className="FAQSection">
      <div className="faqPage">
        <div className="firstQuestion">
          <h2>Do I need gym equipment?</h2>
          <p>
            Many of our workouts are designed to be equipment-free, but we also
            offer a wide range of routines that utilize gym machines and common
            household items.
          </p>
        </div>

        <div className="secondQuestion">
          <h2>How do I know which type of workout is best for me?</h2>
          <p>
            Many people may wonder about the best workout regimen for their
            specific goals and fitness level. They might want guidance on
            whether to focus on strength training, cardiovascular exercises, or
            a combination of both. Additionally, they might be curious about the
            frequency and intensity of workouts that would be suitable for their
            fitness level and health objectives.
          </p>
        </div>

        <div className="thirdQuestion">
          <h2>
            Are there any beginner-friendly classes or programs available?
          </h2>
          <p>
            Beginners may be interested in knowing if the gym offers classes or
            programs specifically tailored to individuals who are new to
            exercising. They might inquire about classes that provide proper
            instructions and support for newcomers, helping them develop proper
            form and techniques while building confidence in their fitness
            journey.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQPage;
