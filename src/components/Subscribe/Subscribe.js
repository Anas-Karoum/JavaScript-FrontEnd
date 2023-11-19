import React from 'react'
import './Subscribe.css'
const Subscribe = () => {
  return (
    <>
                                     <section className="subscribe">
                                    <img src="/bilder/Element2.svg" className="background-lines" alt="background-line"/>
                                    <div className="container">
                                        <div className="content">
                                           <h2>Get News Updates By Signup</h2>
                                            <form action="#" method="post">
                                                <input type="email" className="input-style" placeholder="username@domain.com" name="email" required/>
                                                <button type="submit" className="btn-yellow">Subscribe<i className="fa-solid fa-up-right-from-square"></i></button>
                                            </form>                                    
                                        
                                        </div>
                                        </div>
                                    </section>
    </>
  )
}

export default Subscribe