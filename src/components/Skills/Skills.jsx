import React from 'react'
import "./skills.css"
import UIdesign from "../../assets/UIUX.png"
import Frontenddevelopment from "../../assets/Frontend.png"
import webDesign from "../../assets/asdff.png"

function skill() {
  return (
    <sections id="skills">
        <span className="skillTitle">
          What I Do
        </span>
        <span className="SkillDesc">
          <br/> I am a skills and passionate web developer with experience in creating visually apealing UI  
        </span>
        <div className="skillbars">
          <div className="skillBar">
            <img src={Frontenddevelopment} alt="Front End Development" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Front End Development</h2>
              <p>I specialize in building user interfaces and interactive web applications, bringing design to life with code. As a front-end developer, I focus on crafting engaging and responsive web experiences.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={UIdesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX</h2>
              <p> Creating intuitive and visually appealing user interfaces that enhance the overall user experience. My role as a UI/UX designer is to make digital products both user-friendly and aesthetically pleasing.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={webDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Design</h2>
              <p>I excel in crafting visually stunning and functional website layouts that captivate users. As a web designer, my focus is on creating engaging online experiences through aesthetics and usability.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={webDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Adobe Photoshop</h2>
              <p>I'm a self-taught Adobe Photoshop enthusiast with a passion for digital image manipulation and graphic design. I've honed my skills in Photoshop to bring creativity to life through visual storytelling and editing.</p>
            </div>
          </div>
        </div>
    </sections>
  )
}

export default skill
