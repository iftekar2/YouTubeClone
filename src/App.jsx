import React from "react";
import "../components/Style.css";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ActionPage from "../components/ActionPage";
import ExamplePage from "../components/ExamplePage";
import FAQPage from "../components/FAQPage";
import FooterPage from "../components/FooterPage";

function App() {
  return (
    <div className="mainPage">
      <HomePage />
      <AboutPage />
      <ActionPage />
      <ExamplePage />
      <FAQPage />
      <FooterPage />
    </div>
  );
}

export default App;
