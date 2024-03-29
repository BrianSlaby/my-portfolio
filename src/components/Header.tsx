import React from "react"
import { Link } from "react-router-dom"
import './components.css'

export default function Header(): React.ReactNode {

    return(
        <header>
            <div className="header-content">
                <p className="header-title">Brian Slaby</p>
                <nav>
                    <Link to="/#hero-section">Home</Link>
                    <Link to="/#about-section">About Me</Link>
                    <Link to="/#projects-section">Projects</Link>
                    <Link to="/#contact-section">Contact Me</Link>
                </nav>
            </div>
        </header>
    )
}