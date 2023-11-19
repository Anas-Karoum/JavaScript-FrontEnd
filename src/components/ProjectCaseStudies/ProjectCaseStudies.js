import React from 'react'
import './ProjectCaseStudies.css'
import Button from '../Generics/Button'
const ProjectCaseStudies = () => {
  return (
    <>
                     <section className="Project-Case-Studies">
                    <div className="container">
                        <div className="content">
                            <p>Project & Case Studies</p>
                            <h2>Let’s Looks Our Global Projects</h2>
                        </div>
                        <div className="media">
                            <article>
                                <img src="/bilder/article-image.svg" alt="A mans hands reading a business paper"/>
                                <h3>Grow your business</h3>
                                <a href="#">Read more<i className="fa-solid fa-up-right-from-square"></i></a>
                            </article>
                            <article>
                                <img src="/bilder/article-image2.svg" alt="Pink Apple products on a desk"/>
                                <h3>Why your client needs a responsive website</h3>
                                <a href="#">Read more<i className="fa-solid fa-up-right-from-square"></i></a>
                            </article>
                            <article>
                                <img src="/bilder/article-image3.svg" alt="Desk with supplies"/>
                                <h3>Educate your employees to get better results</h3>
                                <a href="#">Read more<i className="fa-solid fa-up-right-from-square"></i></a>
                            </article>
                            <article>
                                <img src="/bilder/article-image4.svg" alt="Laptop with Business Intelligence Insights"/>
                                <h3>Business Insights is a important piece of your business</h3>
                                <a href="#">Read more<i className="fa-solid fa-up-right-from-square"></i></a>
                            </article>

                        </div>
                        <div className="center-content">
                        <Button type="black" url ="/Projects" title ="All Recent Projects" />
                        </div>
                    </div>
                </section>
    </>
  )
}

export default ProjectCaseStudies