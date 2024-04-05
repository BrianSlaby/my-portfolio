import React from "react"
import { projectHeroHeaderProps } from "../../types"


export default function ProjectHero({ title, description }: projectHeroHeaderProps): React.ReactNode {

    return (
        <section className="hero-section">
            <h1>{title}</h1>
            <div className="project-hero-container">
                <p>{description}</p>
            </div>

            <div className="arrow-container">
                <div className="arrow"></div>
                <div className="arrow"></div>
                <div className="arrow"></div>
            </div>
            
        </section>
    )
}