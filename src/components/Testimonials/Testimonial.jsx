import React from "react";
import "./Testimonial.css";

const testimonials = [];

const Testimonial = () => {
  return (
    <section className="testimonial container" id="testimonial">
      <h2 className="section__title">Clients And Reviews</h2>

      {testimonials.length === 0 ? (
        <p className="testimonial__empty">0 Clients and Reviews</p>
      ) : (
        <div className="testimonial__container">
          {testimonials.map(({ id, name, role, image, review }) => (
            <div className="testimonial__card" key={id}>
              <div className="testimonial__image">
                <img src={image} alt={name} />
              </div>
              <div className="testimonial__content">
                <p className="testimonial__review">"{review}"</p>
                <h3 className="testimonial__name">{name}</h3>
                <span className="testimonial__role">{role}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonial;
