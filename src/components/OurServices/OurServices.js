import React from 'react'
import './OurServices.css'
import Button from '../Generics/Button'
const OurServices = () => {
  return (
    <>

                     <section className="our-services">
                    <img src="/bilder/Element3.svg" className="background-lines" alt="background-line"/>
                    <div className="container">
                    <div className="content">
                    <p>Our Services</p>
                    <h1>We Provide The Best Service For Consulting</h1>
                </div>

                    <div className="parent">
                        <div className="child">
                            <i className="fa-regular fa-window-minimize"></i>                            <h1>Business Advice</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a className="btn-black-round" href="#"><i className="fa-solid fa-arrow-right"></i></a>                            

                        </div>
                        <div className="child child-yellow">
                            <i className="fa-regular fa-window-minimize"></i>                            <h1>Startup Business</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a className="btn-white" href="#"><i className="fa-solid fa-arrow-right"></i></a>                            

                        </div>
                        <div className="child">
                            <i className="fa-regular fa-window-minimize"></i>                            <h1>Financial Advice</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a className="btn-black-round" href="#"><i className="fa-solid fa-arrow-right"></i></a>                            

                        </div>
                        <div className="child">
                            <i className="fa-regular fa-window-minimize"></i>                            <h1>Risk Management</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a className="btn-black-round" href="#"><i className="fa-solid fa-arrow-right"></i></a>                           
                        </div>

                    </div>
                    <div className="center-content">
                    <Button type="transparent" url ="/Services" title ="Brows Services" />
                </div>
                </div>
                </section>
    </>
  )
}

export default OurServices