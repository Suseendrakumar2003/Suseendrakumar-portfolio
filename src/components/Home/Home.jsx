import React from "react";
import "./Home.css"; // your styles here
import Me from "../../assets/avatar-1.svg"; // your image path
import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  const handleHireMeClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="home_container" id="home">
      <div className="intro">
        <img src={Me} alt="Avatar" />
        <h1 className="home__name">Suseendra kumar</h1>
        <span className="home__education">I'm a Front-End developer</span>
        <HeaderSocial />

        <a href="#contact" className="btn" onClick={handleHireMeClick}>
          Hire Me
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
