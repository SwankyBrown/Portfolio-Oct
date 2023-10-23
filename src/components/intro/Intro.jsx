import React from 'react'
import "./intro.css"
import bg from "../../assets/propic.png"
import btnImg from "../../assets/btnImg.png"
import { Link } from "react-scroll"

function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Sheldon</span> <br /> Website Developer</span>
            <p className="introPara">I'm a web developer with solid experience in making websites that <br /> look great and are super user-friendly.</p>
            <Link to=''><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro