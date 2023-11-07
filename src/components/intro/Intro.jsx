import React from 'react';
import './intro.css';
import bg from '../../assets/propic.png';
import btnImg from '../../assets/btnImg.png';

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sheldon</span> <br /> Website Developer
        </span>
        <p className="introPara">
          I'm a web developer with solid experience in making websites that <br /> look great and are super user-friendly.
        </p>
        <a href="https://www.linkedin.com/in/sheldon-christiansen-6a400b274/" target="_blank" rel="noopener noreferrer">
          <button className="btn">
            <img src={btnImg} alt="Hire me" className="btnImg" />
            Hire Me
          </button>
        </a>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
}

export default Intro;
