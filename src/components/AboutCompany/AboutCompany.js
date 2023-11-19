import React from 'react'
import './AboutCompany.css'
import Button from '../Generics/Button'
const AboutCompany = () => {
  return (
    <>
                     <section className="about-company">
                    <div className="box">
                        <h1>Samantha Brown, <span>Founder</span></h1>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                    <div className="container">
                        <img src="/bilder/Image1.svg" alt="image of a women with a laptop"/>
                        <div className="content">
                        <p>About Company</p>
                        <h1>We Are Business Consulting & Credit Repair Experts</h1>
                        <span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                        </span>
                        <Button type="black" url ="/Services" title ="Learn More" />
                            <a className="btn-video" href="#"><i className="fa-solid fa-play"></i></a><span className="hide"> Intro Video</span>                          


                </div>
                </div>

                </section>

    </>
  )
}

export default AboutCompany