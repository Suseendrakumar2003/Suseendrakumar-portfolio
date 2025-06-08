import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState("Everything");

  const filterItem = (category) => {
    if (category === "Everything") {
      setItems(Menu);
      setActive(category);
      return;
    }

    const updatedItems = Menu.filter(
      (curItem) => curItem.category === category
    );
    setItems(updatedItems);
    setActive(category);
  };

  return (
    <section className="work container" id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filter">
        {[
          "Everything",
          "Creative",
          "Art",
          "Design",
          "Branding",
          "Full Stack",
          "CRM",
          "Frontend",
        ].map((category) => (
          <span
            key={category}
            className={`work__item ${active === category ? "active" : ""}`}
            onClick={() => filterItem(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="work__container">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
        {/* Placeholder cards if less than 3 items */}
        {items.length < 3 &&
          Array.from({ length: 3 - items.length }).map((_, idx) => (
            <div
              key={"empty-" + idx}
              className="work__card"
              style={{ visibility: "hidden" }}
            ></div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
