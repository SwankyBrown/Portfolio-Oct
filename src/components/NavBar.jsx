import React from 'react'
import "../components/NavBar.css"
import logo from "../assets/logoNav.png"
import { Link } from "react-scroll"
import contactImg from "../assets/contactImg.png"

function NavBar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="" className='logo'/>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Clients</Link>
        </div>

        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className='desktopMenuImg' /> Contact Me</button>
    </nav>
  )
}

export default NavBar