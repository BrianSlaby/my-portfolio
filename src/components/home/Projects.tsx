import React from "react"
import Project from "./Project"

export default function Projects(): React.JSX.Element {


    return (
        <section id="projects-section">
            <div className="section-header">
                <h2>Projects</h2>
                <div className="accent-line accent-reverse"></div>
                <p className="section-subheading">Here you will find information about some of the projects I've created.</p>
            </div>
            

            <div className="projects-container">
                    
                <Project 
                    src="/images/shopping-helper-capture.png"
                    alt=""
                    title="Shopping Helper"
                    linkTo="/shopping-helper"
                    description="Shopping Helper is a simple app designed to help you organize multiple lists. Your data are securely stored in a Google Firebase database, allowing you to access your lists from multiple devices using your login credentials."
                />

                <Project 
                    src="/images/13a-tracker-capture4.png"
                    alt=""
                    title="13th Age Monster Tracker"
                    linkTo="/13a-monster-tracker"
                    description="13th Age is a tabletop roleplaying game (RPG) similar to Dungeons and Dragons. This app allows the Game Master (GM) to run combat more smoothly by automating the math."
                />
                
                    
                <Project 
                    src="/images/quizzical-capture4.png"
                    alt=""
                    title="Quizzical"
                    linkTo="/quizzical"
                    description="Quizzical is a quiz app that uses the Open Trivia Database API to randomly generate 5 questions at a time. You can select a category, or try your luck with random questions from all categories. Can you get a perfect score?"
                />

            </div>
        </section>
    )
}