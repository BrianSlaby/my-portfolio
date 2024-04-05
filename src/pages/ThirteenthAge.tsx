import React from "react"
import { galleryImage } from "../types"
import ProjectHero from "../components/project-page/ProjectHero"
import ProjectLinks from "../components/project-page/ProjectLinks"
import Overview from "../components/thirteenth-age/Overview"
import Features from "../components/thirteenth-age/Features"
import Tech from "../components/thirteenth-age/Tech"
import Gallery from "../components/Gallery"

export default function ThirteenthAge(): React.JSX.Element {

    const galleryImages: galleryImage[] = [
        {
            url: "/images/13a-tracker-capture2.png",
            alt: "",
            caption: "13th Age Monster Tracker modal for filtering monsters by level.",
            index: 0,
            isCurrent: true
        },
        {
            url: "/images/13a-tracker-capture3.png",
            alt: "",
            caption: "Dropdown for selecting monsters filtered by level within selection modal.",
            index: 1,
            isCurrent: false
        },
        {
            url: "/images/13a-tracker-capture4.png",
            alt: "",
            caption: "Individual monster cards for tracking within combat. The first goblin grunt is staggered, represented by its current hit points in red. The goblin scum card is a group of 5 mooks, or weak monsters that fight as a single group and share a hit point pool.",
            index: 2,
            isCurrent: false
        }
    ]

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

                <Gallery 
                    galleryImages={galleryImages}
                />

                <ProjectLinks 
                    liveUrl="https://13th-age-monster-tracker.netlify.app/"
                    githubUrl="https://github.com/BrianSlaby/13a-dmg-tracker"
                />
            </section>

        </div>
    )
}