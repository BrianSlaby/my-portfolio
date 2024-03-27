import { useEffect } from "react"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import Projects from "../components/home/Projects"
import Contact from "../components/home/Contact"


export default function Home() {

    // useEffect(() => {
    //     const id = window.location.hash.substring(1)
    //     const element = document.getElementById(id)
    //     if (element) {
    //         element.scrollIntoView()
    //     }
    // }, [])

    return(
        <div className="home-container">
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}