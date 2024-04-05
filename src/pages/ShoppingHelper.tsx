import React from "react"
import { galleryImage } from "../types"
import ProjectHero from "../components/project-page/ProjectHero"
import ProjectLinks from "../components/project-page/ProjectLinks"
import Overview from "../components/shopping-helper/Overview"
import Features from "../components/shopping-helper/Features"
import Tech from "../components/shopping-helper/Tech"
import Gallery from "../components/Gallery"

export default function ShoppingHelper(): React.JSX.Element {

    const galleryImages: galleryImage[] = [
        {
            url: "/public/images/shopping-helper-capture.png",
            alt: "",
            caption: "Shopping Helper authentication screen.",
            index: 0,
            isCurrent: true
        },
        {
            url: "/public/images/shopping-helper-capture2.png",
            alt: "",
            caption: "Logged in UI with example lists, all collapsed.",
            index: 1,
            isCurrent: false
        },
        {
            url: "/public/images/shopping-helper-capture3.png",
            alt: "",
            caption: "Logged in UI with a list open.",
            index: 2,
            isCurrent: false
        }
    ]


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

                <Gallery 
                    galleryImages={galleryImages}
                />

                <ProjectLinks 
                    liveUrl="https://shopping-helper-list-organizer.netlify.app/"
                    githubUrl="https://github.com/BrianSlaby/shopping-helper"
                />
            </section>

        </div>
    )
}