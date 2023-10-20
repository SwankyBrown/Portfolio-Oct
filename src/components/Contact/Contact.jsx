import React from 'react'
import "../Contact/Contact.css"
import DadsLogo from "../../assets/dadslogo.png"
import linkedinIcon from "../../assets/linkedinIcon.png"
import githubIcon from "../../assets/githubicon.png"
import intagramIcon from "../../assets/Instagramicon.png"
import tiktokIcon from "../../assets/tiktokIcon.png"

function Contact() {
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contantPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with these companies
            </p>
            <div className="clientImgs">
                <img src={DadsLogo} alt="" className="clientimg" />
                <img src="" alt="" className="clientimg" />
                <img src="" alt="" className="clientimg" />
                <img src="" alt="" className="clientimg" />
            </div>

        </div>
        <div id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form Below to discuss any work Opportunities.</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder='Your Name' />
            <input type="email" className="email" placeholder='Your Email' />
            <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value="Send" className="submitBtn">Submit</button>
            <div className="links">
                <img src={linkedinIcon} alt="" className="link" />
                <img src={githubIcon} alt="" className="link" />
                <img src={intagramIcon} alt="" className="link" />
                <img src={tiktokIcon} alt="" className="link" />
            </div>
        </form>
        </div>
    </section>
  )
}

export default Contact