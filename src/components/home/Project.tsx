import React from "react"
import { Link } from "react-router-dom"
import { projectComponentProps } from "../../types"

export default function Project({ src, alt, title, linkTo, description }: projectComponentProps): React.ReactNode {


    return (
        <>
            <div className="img-container project-img-container">
                <img 
                    className="project-img"
                    src={src} 
                    alt={alt}/>
            </div>
                
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link 
                    className="link-btn-style link-btn-light" 
                    to={linkTo}>Learn More</Link>
            </div>
        </>
    )
}