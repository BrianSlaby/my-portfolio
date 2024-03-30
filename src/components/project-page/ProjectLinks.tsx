import React from "react"

type projectLinksProps = {
    liveUrl: string,
    githubUrl: string
}

export default function ProjectLinks({ liveUrl, githubUrl }: projectLinksProps): React.ReactNode {


    return (
        <div className="project-links-container">
            <a 
                className="link-btn-style link-btn-dark" 
                href={liveUrl}
            
            >Link to Live Site</a>

            <a 
                className="link-btn-style link-btn-dark" 
                href={githubUrl}
            
            >GitHub Repository</a>
        </div>
    )
}