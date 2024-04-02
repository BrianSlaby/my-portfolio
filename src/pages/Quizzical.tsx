import React from "react"
import ProjectHero from "../components/project-page/ProjectHero"
import ProjectLinks from "../components/project-page/ProjectLinks"
import Overview from "../components/quizzical/Overview"
import Features from "../components/quizzical/Features"
import Tech from "../components/quizzical/Tech"

export default function Quizzical(): React.ReactNode {

    return (
        <div className="project-main-container">
            <ProjectHero
                title="Quizzical"
                description="This page contains details about the Quizzical app including an overview of its functionality, the technology used to build it, and links to the deployed project and source code." />

            

            <section className="project-details-section">
                <div className="section-header">
                    <h2>Project Details</h2>
                    <div className="accent-line">  </div>
                </div>

                <Overview />

                <Features />

                <Tech />

                <div className="gallery-container">
                    <figure className="gallery-figure">
                        <img 
                            className="gallery-img" 
                            src="/public/images/quizzical-capture2.png"
                            alt=""
                        />
                        <figcaption>Dropdown menu for selecting category of quiz questions.</figcaption>
                    </figure>

                    <figure className="gallery-figure">
                        <img 
                            className="gallery-img" 
                            src="/public/images/quizzical-capture3.png"
                            alt=""
                        />
                        <figcaption>Example quiz with answers selected.</figcaption>
                    </figure>

                    <figure className="gallery-figure">
                        <img 
                            className="gallery-img" 
                            src="/public/images/quizzical-capture4.png"
                            alt=""
                        />
                        <figcaption>Quiz results screen with correct answers in green and incorrect answers in red.</figcaption>
                    </figure>


                </div>


                <ProjectLinks 
                    liveUrl="https://quizzical-bslaby.netlify.app/"
                    githubUrl="https://github.com/BrianSlaby/quizzical"
                />
            </section>

        </div>
    )
}