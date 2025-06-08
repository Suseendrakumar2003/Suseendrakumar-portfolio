import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section container" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__content">
        {/* Left Side */}
        <div className="contact__info">
          <h3 className="contact__info-title">Let's Connect</h3>
          <p className="contact__description">
            I'm always open to new opportunities and collaborations. If you'd
            like to work with me or have any questions, feel free to reach out!
          </p>

          <ul className="contact__socials">
            <li>
              <i className="icon-social-google"></i> suseendrakumarr@gmail.com
            </li>
            <li>
              <i className="icon-phone"></i> +91 8825909953
            </li>
            <li>
              <i className="icon-location-pin"></i> Tamil Nadu, India
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <form className="contact__form">
          <div className="form__group">
            <input
              type="text"
              placeholder="Full Name"
              className="form__input"
            />
          </div>
          <div className="form__group">
            <input
              type="email"
              placeholder="Email Address"
              className="form__input"
            />
          </div>
          <div className="form__group">
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="form__input"
            ></textarea>
          </div>
          <button type="submit" className="form__button">
            <i className="icon-send"></i> Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
