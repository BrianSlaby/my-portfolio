import React from "react"

export default function Hero(): React.JSX.Element {

    return (
        <section className="hero-section" id="hero-section">
                <h1>Brian Slaby</h1>
                <p className="section-subheading hero-subheading">Frontend Developer</p>
                <div className="arrow-container">
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                </div>
            </section>
    )
}