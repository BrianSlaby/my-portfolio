import React from "react"
import { galleryImage } from "../types"
import ProjectHero from "../components/project-page/ProjectHero"
import ProjectLinks from "../components/project-page/ProjectLinks"
import Overview from "../components/quizzical/Overview"
import Features from "../components/quizzical/Features"
import Tech from "../components/quizzical/Tech"
import Gallery from "../components/Gallery"

export default function Quizzical(): React.JSX.Element {

    const galleryImages: galleryImage[] = [
        {
            url: "/public/images/quizzical-capture2.png",
            alt: "",
            caption: "Dropdown menu for selecting category of quiz questions.",
            index: 0,
            isCurrent: true
        },
        {
            url: "/public/images/quizzical-capture3.png",
            alt: "",
            caption: "Example quiz with answers selected.",
            index: 1,
            isCurrent: false
        },
        {
            url: "/public/images/quizzical-capture4.png",
            alt: "",
            caption: "Quiz results screen with correct answers in green and incorrect answers in red.",
            index: 2,
            isCurrent: false
        }
    ]

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

                <Gallery 
                    galleryImages={galleryImages}
                />

                <ProjectLinks 
                    liveUrl="https://quizzical-bslaby.netlify.app/"
                    githubUrl="https://github.com/BrianSlaby/quizzical"
                />
            </section>

        </div>
    )
}