import React from "react"
import { projectLinksProps } from "../../types"

export default function ProjectLinks({ liveUrl, githubUrl }: projectLinksProps): React.JSX.Element {


    return (
        <div className="project-links-container">
            <a 
                className="link-btn-style link-btn-dark" 
                href={liveUrl}
                target="_blank"
            >Link to Live Site</a>

            <a 
                className="link-btn-style link-btn-dark" 
                href={githubUrl}
                target="_blank"
            >GitHub Repository</a>
        </div>
    )
}