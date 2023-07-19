import React from "react";
import "../components/Style.css";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ActionPage from "../components/ActionPage";
import ExamplePage from "../components/ExamplePage";
import FAQPage from "../components/FAQPage";
import FooterPage from "../components/FooterPage";
import SloganPage from "../components/SloganPage";

function App() {
  return (
    <div className="mainPage">
      <HomePage />
      <SloganPage />
      <AboutPage />
      <ActionPage />
      <ExamplePage />
      <FAQPage />
      <FooterPage />
    </div>
  );
}

export default App;
