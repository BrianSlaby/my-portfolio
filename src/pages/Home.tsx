import React from "react"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import Projects from "../components/home/Projects"
import Contact from "../components/home/Contact"


export default function Home(): React.JSX.Element {


    return(
        <div className="home-container">
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}