import React from "react"
import ProjectHero from "../components/project-page/ProjectHero"
import ProjectLinks from "../components/project-page/ProjectLinks"

export default function ShoppingHelper(): React.ReactNode {

    return (
        <div className="project-main-container">
            <ProjectHero
                title="Shopping Helper"
                description="This page contains details about the Shopping Helper app including an overview of its functionality, the technology used to build it, and links to the deployed project and source code." />



            <ProjectLinks 
                liveUrl="https://shopping-helper-list-organizer.netlify.app/"
                githubUrl="https://github.com/BrianSlaby/shopping-helper"
            />

        </div>
    )
}