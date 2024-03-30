import React from "react"
import ProjectHero from "../components/project-page/ProjectHero"
import ProjectLinks from "../components/project-page/ProjectLinks"

export default function ThirteenthAge(): React.ReactNode {

    return (
        <div className="project-main-container">
            <ProjectHero
                title="13th Age Monster Tracker"
                description="This page contains details about the 13th Age Monster Tracker app including an overview of its functionality, the technology used to build it, and links to the deployed project and source code." />



            <ProjectLinks 
                liveUrl="https://13th-age-monster-tracker.netlify.app/"
                githubUrl="https://github.com/BrianSlaby/13a-dmg-tracker"
            />

        </div>
    )
}