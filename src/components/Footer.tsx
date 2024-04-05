import React from "react"
import './components.css'
import GithubIcon from "../assets/GithubIcon"
import LinkedInIcon from "../assets/LinkedInIcon"

export default function Footer(): React.JSX.Element {

    return (
        <footer>
            <h3>Brian Slaby</h3>
            <p>brian.slaby@gmail.com</p>
                
            <div className="footer-links-container">
                <div>
                    <a target="_blank" href="https://github.com/BrianSlaby">
                        <GithubIcon />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.linkedin.com/in/brian-slaby-78022388/">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
            <p className="small-text">Background image by <a target="_blank" href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/"> SVGBackgrounds.com</a>.  <a target="_blank" href="https://icons8.com/icon/84648/resume-website">Portfolio</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>.  Email Vectors image by <a target="_blank" href="https://www.vecteezy.com/free-vector/email">Vecteezy</a>.</p>

            <p className="small-text">Updated 2024</p>
        </footer>
    )
}