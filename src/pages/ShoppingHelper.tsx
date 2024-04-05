import React from "react"
import ProjectHero from "../components/project-page/ProjectHero"
import ProjectLinks from "../components/project-page/ProjectLinks"
import Overview from "../components/shopping-helper/Overview"
import Features from "../components/shopping-helper/Features"
import Tech from "../components/shopping-helper/Tech"
import Gallery from "../components/shopping-helper/Gallery"

export default function ShoppingHelper(): React.ReactNode {

    return (
        <div className="project-main-container">
            <ProjectHero
                title="Shopping Helper"
                description="This page contains details about the Shopping Helper app including an overview of its functionality, the technology used to build it, and links to the deployed project and source code." />

            <section className="project-details-section">
                <div className="section-header">
                    <h2>Project Details</h2>
                    <div className="accent-line">  </div>
                </div>

                <Overview />

                <Features />

                <Tech />

                <Gallery />

                <ProjectLinks 
                    liveUrl="https://shopping-helper-list-organizer.netlify.app/"
                    githubUrl="https://github.com/BrianSlaby/shopping-helper"
                />
            </section>

        </div>
    )
}