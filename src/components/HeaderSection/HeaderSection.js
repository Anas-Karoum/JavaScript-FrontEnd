import React from 'react'
import './HeaderSection.css'
import Button from '../Generics/Button'
const header = () => {
  return (
    <>

<header>
<div className="container">
   <a href="/"> <img src="/bilder/Logo.svg" alt="crito logo"/></a>
    <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
        <div className="menu">
            <div className="top-menu">
            <div className="contact-information">
    <div className="content-box">
        <i className="fa-solid fa-phone-volume"></i>
        +46 (8) 121 470 50
    </div>
    <div className="content-box" >
        <i className="fa-regular fa-envelope"></i>
        info@crito.com
    </div>
    <div className="content-box last" >
        <i className="fa-solid fa-location-dot"></i>
        Sveavägen 31, 111 34 STOCKHOLM
    </div>
    </div>
    <div className="social-media">
        <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
    </div>
    </div>
    <div className="main-menu">
        <nav>
            <a href="/">Home</a>
            <a href="Services">Service</a>
            <a href="News">News</a>
            <a href="Contact">Contact</a>
        </nav>
        <Button type="yellow" url ="/RegistrationForm" title ="Login" />
    </div>
    </div>
</div>
</header>

    </>
  )
}

export default header