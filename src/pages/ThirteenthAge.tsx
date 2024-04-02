import React from "react"
import ProjectHero from "../components/project-page/ProjectHero"
import ProjectLinks from "../components/project-page/ProjectLinks"
import Overview from "../components/thirteenth-age/Overview"
import Features from "../components/thirteenth-age/Features"
import Tech from "../components/thirteenth-age/Tech"

export default function ThirteenthAge(): React.ReactNode {

    return (
        <div className="project-main-container">
            <ProjectHero
                title="13th Age Monster Tracker"
                description="This page contains details about the 13th Age Monster Tracker app including an overview of its functionality, the technology used to build it, and links to the deployed project and source code." />

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
                            src="/public/images/13a-tracker-capture2.png"
                            alt=""
                        />
                        <figcaption>13th Age Monster Tracker modal for filtering monsters by level.</figcaption>
                    </figure>

                    <figure className="gallery-figure">
                        <img 
                            className="gallery-img" 
                            src="/public/images/13a-tracker-capture3.png"
                            alt=""
                        />
                        <figcaption>Dropdown for selecting monsters filtered by level within selection modal.</figcaption>
                    </figure>

                    <figure className="gallery-figure">
                        <img 
                            className="gallery-img" 
                            src="/public/images/13a-tracker-capture4.png"
                            alt=""
                        />
                        <figcaption>Individual monster cards for tracking within combat. The first goblin grunt is staggered, represented by its current hit points in red. The goblin scum card is a group of 5 mooks, or weak monsters that fight as a single group and share a hit point pool.</figcaption>
                    </figure>


                </div>

                <ProjectLinks 
                    liveUrl="https://13th-age-monster-tracker.netlify.app/"
                    githubUrl="https://github.com/BrianSlaby/13a-dmg-tracker"
                />
            </section>

        </div>
    )
}