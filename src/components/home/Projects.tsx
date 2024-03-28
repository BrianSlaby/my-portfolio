import { Link } from "react-router-dom"

export default function Projects() {


    return (
        <section id="projects-section">
            <div className="section-header">
                <h2>Projects</h2>
                <div className="accent-line accent-reverse"></div>
                <p className="section-subheading">Here you will find information about some of the projects I've created.</p>
            </div>
            

            <div className="projects-container">
                    

                <div className="img-container project-img-container">
                    <img 
                        className="project-img"
                        src="/public/images/shopping-helper-capture.png" 
                        alt=""/>
                </div>
                    
                <div className="project-info">
                    <h3>Shopping Helper</h3>
                    <p>Shopping Helper is a simple app designed to help you organize multiple lists. Your data are securely stored in a Google Firebase database, allowing you to access your lists from multiple devices using your login credentials.</p>
                    <Link className="link-btn-style" to="">Learn More</Link>
                </div>
                
                    
                <div className="img-container project-img-container">
                    <img 
                        className="project-img"
                        src="/public/images/13a-tracker-capture.png" 
                        alt=""/>
                </div>
                    
                <div className="project-info">
                    <h3>13th Age Monster Tracker</h3>
                    <p>13th Age is a tabletop roleplaying game (RPG) similar to Dungeons and Dragons. This app allows the Game Master (GM) to run combat more smoothly by automating the math.</p>
                    <Link className="link-btn-style" to="">Learn More</Link>
                </div>
                
                    
                <div className="img-container project-img-container">
                    <img 
                        className="project-img"
                        src="/public/images/quizzical-capture.png" 
                        alt=""/>
                </div>
                    
                <div className="project-info">
                    <h3>Quizzical</h3>
                    <p>Quizzical is a quiz app that uses the Open Trivia Database API to randomly generate 5 questions at a time. You can select a category, or try your luck with random questions from all categories. Can you get a perfect score?</p>
                    <Link className="link-btn-style" to="">Learn More</Link>
                </div>
                

            </div>
        </section>
    )
}