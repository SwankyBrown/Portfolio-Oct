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
              <p>demo text</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={UIdesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX</h2>
              <p>This is a demo text</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={webDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Design</h2>
              <p>demo text</p>
            </div>
          </div>
        </div>
    </sections>
  )
}

export default skill
