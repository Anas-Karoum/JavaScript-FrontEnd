import React from 'react'
import './Testimonial.css'
import Button from '../Generics/Button'
const Testimonial = () => {
  return (
    <>
                                     <section className="testimonial">
                                    <div className="container">
                                        <div className="box">
                                        <div className="content">
                                            <p>Testimonial</p>
                                           <h2>What Our Client Says</h2>
                                        </div>
                                        <div className="parent">
                                            <div className="child">
                                                <img src="/bilder/star.svg" alt="image of Mark Aubri"/>
                                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                               <span>
                                                <img src="/bilder/cassandra-warren.svg" alt="image of Cassandra Warren"/>
                                                <div>
                                                <h3>Cassandra Warren</h3>
                                                <p>Business Manager, Dorfus</p>
                                            </div>
                                        </span>
                                            </div>
                                            <div className="child">
                                                <img src="/bilder/star.svg" alt="image of Mark Aubri"/>
                                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                               <span>
                                                <img src="/bilder/amanda-tulling.svg" alt="image of Cassandra Warren"/>
                                                <div>
                                                    <h3>Amanda Tulling</h3>
                                                <p>Senior Developer, Square</p>
                                                </div>
                                            </span>
                                            </div>
                                            <div className="child">
                                                <img src="/bilder/star.svg" alt="image of Mark Aubri"/>
                                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                                <span>
                                                <img src="/bilder/jack-mcdogglas.svg" alt="image of Cassandra Warren"/>
                                               <div>
                                                <h3>Jack McDogglas</h3>
                                                <p>Key Account Manager, Gobona</p>
                                            </div>
                                        </span>
                                            </div>
                                            </div>
                                            <div className="center-content">
                                            <Button type="black" url ="/Reviews" title ="All Reviews" />
                                            </div>
                                        </div>
                                    </div>
                                </section>
    </>
  )
}

export default Testimonial