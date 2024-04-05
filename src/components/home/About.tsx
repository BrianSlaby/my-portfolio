import React from "react"

export default function About(): React.JSX.Element {

    return (
        <section id="about-section">
            <div className="section-header">
                <h2>About Me</h2>
                <div className="accent-line">  </div>
                <p className="section-subheading">Here you will find more information about me, what I do, and my technical skills.</p>
            </div>
            

            <div className="about-container">
                <div className="section-col">
                    <h3>Get to know me</h3>
                    <p>I'm a <strong>frontend developer</strong> in the Cleveland, Ohio area. I build apps and websites primarily using <strong>React</strong>, with an emphasis on clean code. Organization and clarity result in a code base that's easier to read, easier to maintain, and easier to debug.</p>

                    <p>My background is in ecology, and in my previous career I've worked for universities, federal and local government agencies, and an environmental consulting company. I leveraged my problem solving skills to create experimental designs and field data collection protocols, and embraced adaptability in a field where complexity and variability are the norm.</p>
                </div>

                <div className="section-col">
                    <h3>My Skills</h3>
                    <ul className="skills-container">
                        <li className="skill"> JavaScript </li>
                        <li className="skill"> TypeScript </li>
                        <li className="skill"> React </li>
                        <li className="skill"> HTML </li>
                        <li className="skill"> CSS </li>
                        <li className="skill"> SQL </li>
                        <li className="skill"> Git </li>
                        <li className="skill"> GitHub </li>
                        <li className="skill"> Google Firebase </li>
                        <li className="skill"> Jasmine </li>
                        <li className="skill"> npm </li>
                        <li className="skill"> Vite </li>
                        <li className="skill"> Netlify </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}