import React, { useRef } from 'react';
import "../Contact/Contact.css";
import DadsLogo from "../../assets/dadslogo.png";
import linkedinIcon from "../../assets/linkedinIcon.png";
import githubIcon from "../../assets/githubicon.png";
import intagramIcon from "../../assets/Instagramicon.png";
import tiktokIcon from "../../assets/tiktokIcon.png";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gzntlwf', 'template_3ln7qr5', form.current, 'mNw4UNS26s96Fq-Fm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value="Send" className="submitBtn">Submit</button>
                <div className="links">
                <a href="https://www.linkedin.com/in/sheldon-christiansen-6a400b274/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="link" />
      </a>
      <a href="https://github.com/SwankyBrown" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" className="link" />
      </a>
      <a href="https://www.instagram.com/sheldon.c75/" target="_blank" rel="noopener noreferrer">
        <img src={intagramIcon} alt="Instagram" className="link" />
      </a>
      <a href="https://www.tiktok.com/@bigshel10" target="_blank" rel="noopener noreferrer">
        <img src={tiktokIcon} alt="TikTok" className="link" />
      </a>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact;
