import React from 'react';
import './Services.css';
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";


const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX Design",
    description:
      "Designing clean, responsive, and user-friendly interfaces using Figma and modern UI principles.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Building full-stack web applications using the MERN stack with responsive layouts and RESTful APIs.",
  },
  {
    id: 3,
    image: Image3,
    title: "Video Editing",
    description:
      "Creating and editing promotional and educational videos using tools like Filmora and CapCut.",
  },
];


const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="section__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services