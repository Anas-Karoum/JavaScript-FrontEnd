import React from 'react'
import './Features.css'
import Button from '../Generics/Button'
const Features = () => {
  return (
    <>
                    <section className="features">
                    <div className="container">
                        <div className="content">
                            <p>Features</p>
                        <h1>Our Accounting is
                            trusted by thousand
                            of companies</h1>
                            <Button type="yellow" url ="/Services" title ="Learn More" />

                        </div>
                        <div className="parent">
                            <div className="child">
                                <i className="fa-regular fa-handshake"></i>
                                <h1>Business Advice</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="child">
                                <i className="fa-regular fa-lightbulb"></i>
                                <h1>Startup Business</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="child">
                                <i className="fa-solid fa-money-bill-trend-up"></i>                                
                                <h1>Financial Advice</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="child">
                                <i className="fa-solid fa-box"></i>                                
                                <h1>Risk Management</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                        </div>
                    </div>
            </section>

    </>
  )
}

export default Features