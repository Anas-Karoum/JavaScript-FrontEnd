import React from 'react'
import './Showcase.css'
import Button from '../Generics/Button'
const Showcase = () => {
  return (
    <>
        {/*showcase section*/}
        <section className="showcase">
        <img src="/bilder/Element1.svg" className="background-lines" alt="background-line"/>
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Button type="yellow" url ="/Consulting" title ="Get Consulting" />
                    <Button type="yellow" url ="/services" title ="Learn More" />
            </div>
            <img src="/bilder/showcase-image.svg" alt="showcase image of a man in a suit with a tablet"/>
        </div>

    </section>
    </>
  )
}

export default Showcase