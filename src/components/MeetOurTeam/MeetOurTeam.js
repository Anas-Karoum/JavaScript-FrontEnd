import React from 'react'
import './MeetOurTeam.css'
import Button from '../Generics/Button'
const MeetOurTeam = () => {
  return (
    <>
                     <section className="meet-our-team">
                    <div className="container">
                        <div className="content">
                            <p>Meet Our Team</p>
                           <span> <h2>Experience Team Members</h2>
                           <Button type="transparent" url ="/OurTeam" title ="Browse Team" />
                        </span> 
                        </div>
                        <div className="parent">
                            <div className="child">
                                <img src="/bilder/kristine-palmer.svg" alt="image of Kristine Palmer"/>
                                <h3>Kristine Palmer</h3>
                                <p>Chef Operation Officer</p>
                            </div>
                            <div className="child">
                                <img src="/bilder/mark-aubri.svg" alt="image of Mark Aubri"/>
                                <h3>Mark Aubri</h3>
                                <p>Senior Consultant</p>
                            </div>
                            <div className="child">
                                <img src="/bilder/kimberly-hansen.svg" alt="image of Kimberly Hansen"/>
                                <h3>Kimberly Hansen</h3>
                                <p>Senior Consultant</p>
                            </div>
                            <div className="child">
                                <img src="/bilder/justin-willoman.svg" alt="image of Justin Willoman"/>
                                <h3>Justin Willoman</h3>
                                <p>Senior Tech Consultant</p>
                            </div>
                            </div>    
                    </div>
                </section>
    </>
  )
}

export default MeetOurTeam