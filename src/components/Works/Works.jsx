import React from 'react'
import '../Works/Works.css'

import Portfolio1 from "../../assets/portfolio1.png"
import Portfolio2 from "../../assets/Portfolio2.png"
import Portfolio3 from "../../assets/Portfolio3.png"
import Portfolio4 from "../../assets/portfolio4.png"
import Portfolio5 from "../../assets/portfolio5.png"
// import Portfolio6 from "../../assets/portfolio6"

function Works() {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">i take pride in paying attention to the smallest details</span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            {/* <img src={Portfolio6} alt="" className="worksImg" /> */}
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works