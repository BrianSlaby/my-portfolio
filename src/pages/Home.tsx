

export default function Home() {

    return(
        <div className="home-container">
            <section id="hero-section">
                <h1>Brian Slaby</h1>
                <p className="section-subheading">Frontend Developer</p>

                {
                    // create animated down arrows
                }
            </section>

            <section id="about-section">
                <h2>About Me</h2>
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
                <p className="section-subheading">Here you will find information about some of the projects I've created.</p>
            </section>

            <section id="contact-section">
                <h2>Contact Me</h2>
                <p className="section-subheading">Feel free to contact me using the form below, and I'll get back to you as soon as I am able.</p>
            </section>
        </div>
    )
}