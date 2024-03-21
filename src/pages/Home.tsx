

export default function Home() {

    return(
        <div className="home-container">
            <section id="hero-section">
                <h1>Brian Slaby</h1>
                <p className="section-subheading hero-subheading">Frontend Developer</p>

                {
                    // create animated down arrows
                }
                <div className="arrow-container">
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                </div>
            </section>

            <section id="about-section">
                <h2>About Me</h2>
                <div className="accent-line"></div>
                <p className="section-subheading">Here you will find more information about me, what I do, and my technical skills.</p>

                <div className="section-col-container">
                    <div className="section-col">
                        <h3>Get to know me</h3>
                        <p>I'm a <strong>frontend developer</strong> in the Cleveland, Ohio area. I build apps and websites with an emphasis on <strong>clean code</strong>. Organization and clarity result in a code base that's easier to read, easier to maintain, and easier to debug.</p>

                        <p>My background is in ecology, and in my previous career I've worked for universities, federal and local government agencies, and an environmental consulting company. I leveraged my problem solving skills to create experimental designs and field data collection protocols, and embraced adaptability in a field where complexity and variability are the norm.</p>
                    </div>

                    <div className="section-col">
                        <h3>My Skills</h3>
                        <div className="skills-container">
                            <div className="skill"> JavaScript </div>
                            <div className="skill"> TypeScript </div>
                            <div className="skill"> React </div>
                            <div className="skill"> HTML </div>
                            <div className="skill"> CSS </div>
                            <div className="skill"> SQL </div>
                            <div className="skill"> Git </div>
                            <div className="skill"> GitHub </div>
                            <div className="skill"> Google Firebase </div>
                            <div className="skill"> Jasmine </div>
                            <div className="skill"> npm </div>
                            <div className="skill"> Vite </div>
                            <div className="skill"> Netlify </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects-section">
                <h2>Projects</h2>
                <div className="accent-line accent-reverse"></div>
                <p className="section-subheading">Here you will find information about some of the projects I've created.</p>
            </section>

            <section id="contact-section">
                <h2>Contact Me</h2>
                <div className="accent-line"></div>
                <div className="section-col-container">

                    <div className="section-col">
                        <p>Whether you have a job opportunity that matches my skills and experience, have questions about my work, or just want to say hello feel free to contact me. I can be reached at <span className="bold-text">brian.slaby@gmail.com</span>. You can also connect with me on <a href="https://www.linkedin.com/in/brian-slaby-78022388/">LinkedIn</a>, or check out the source code for my projects on <a href="https://github.com/BrianSlaby">GitHub</a>.</p>
                    </div>

                    <div className="section-col">

                    </div>

                    
                </div>
                
            </section>
        </div>
    )
}