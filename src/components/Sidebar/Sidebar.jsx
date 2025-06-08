import React, { useState } from "react";
import "./Sidebar.css";
import Me from "../../assets/avatar-1.svg";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <aside className={`aside ${showMenu ? "show-menu" : ""}`}>
        <a href="#home" className="nav__logo">
          <img src={Me} alt="logo" className="nav__logo-img" />
        </a>
        

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__links">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__links">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__links">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__links">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__links">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#blog" className="nav__links">
                  <i className="icon-note"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__links">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2025.</span>
        </div>
      </aside>

      <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
