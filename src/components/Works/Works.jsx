import React from 'react';
import '../Works/Works.css';

import Portfolio1 from "../../assets/portfolio1.png";
import Portfolio2 from "../../assets/Portfolio2.png";
import Portfolio3 from "../../assets/Portfolio3.png";
import Portfolio4 from "../../assets/portfolio4.png";
import Portfolio5 from "../../assets/portfolio5.png";

function Works() {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">I take pride in paying attention to the smallest details</span>
      <div className="worksImgs">
        <img
          src={Portfolio1}
          alt=""
          className="worksImg"
          onClick={() => openLink('https://drive.google.com/file/d/1_eAHM2NiATKClsLPu8H9jnV0DaPGfu4E/view?usp=sharing')}
        />
        <img
          src={Portfolio2}
          alt=""
          className="worksImg"
          onClick={() => openLink('https://codepen.io/Bigshel/pen/bGRqJbV')}
        />
        <img
          src={Portfolio3}
          alt=""
          className="worksImg"
          onClick={() => openLink('https://drive.google.com/file/d/1o9Hn-_A_W_XcnK261NJDBVfytk4KnR3E/view')}
        />
        <img
          src={Portfolio4}
          alt=""
          className="worksImg"
          onClick={() => openLink('https://example.com/link4')}
        />
        <img
          src={Portfolio5}
          alt=""
          className="worksImg"
          onClick={() => openLink('https://github.com/SwankyBrown/Calculator')}
        />
      </div>
      <button className="worksBtn" onClick={()=> openLink("https://github.com/SwankyBrown")}>See More</button>
    </section>
  );
}

export default Works;
