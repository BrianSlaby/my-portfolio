import React from "react"
import ProjectHero from "../components/project-page/ProjectHero"
import ProjectLinks from "../components/project-page/ProjectLinks"

export default function Quizzical(): React.ReactNode {

    return (
        <div className="project-main-container">
            <ProjectHero
                title="Quizzical"
                description="This page contains details about the Quizzical app including an overview of its functionality, the technology used to build it, and links to the deployed project and source code." />

            



            <ProjectLinks 
                liveUrl="https://quizzical-bslaby.netlify.app/"
                githubUrl="https://github.com/BrianSlaby/quizzical"
            />
            
        </div>
    )
}