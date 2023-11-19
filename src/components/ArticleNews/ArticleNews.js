import React from 'react'
import './ArticleNews.css'
import Button from '../Generics/Button'
const ArticleNews = () => {
  return (
    <>
                                     <section className="article-news">
                                    <div className="container">
                                        <div className="content">
                                            <p>Article & News</p>
                                           <span> <h2>Get Every Single Articles & News</h2>
                                           <Button type="transparent" url ="/OurTeam" title ="Browse Team" />
                                        </span> 
                                        </div>
                                        <div className="parent">
                                            <div className="child">
                                                <img src="/bilder/news1.svg" alt="image of Kristine Palmer"/>
                                                <p>Business</p>
                                                <h3>How To Use Digitalization In The Classroom</h3>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                                            </div>
                                            <div className="child">
                                                <img src="/bilder/news2.svg" alt="image of Kristine Palmer"/>
                                                <p>Business</p>
                                                <h3>How To Implement Chat GPT In Your Projects</h3>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                                            </div>
                                            <div className="child">
                                                <img src="/bilder/news3.svg" alt="image of Kristine Palmer"/>
                                                <p>Business</p>
                                                <h3>The Guide To Support Modern CSS Design</h3>
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                                            </div>
                                            </div>    
                                    </div>
                                </section>

    </>
  )
}

export default ArticleNews