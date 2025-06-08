import React from 'react'

const HeaderSocial = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/suseendra-kumar-r-2388ba257"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://github.com/Suseendrakumar2003"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.instagram.com/?next=%2F"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
}

export default HeaderSocial