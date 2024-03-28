

export default function Contact() {

    return (
        <section id="contact-section">
            <div className="section-header">
                <h2>Contact Me</h2>
                <div className="accent-line"></div>
            </div>
            
            <div className="contact-container">
                
                <p>Whether you have a job opportunity that matches my skills and experience, have questions about my work, or just want to say hello feel free to contact me. I can be reached at <span className="bold-text">brian.slaby@gmail.com</span>. You can also connect with me on <a href="https://www.linkedin.com/in/brian-slaby-78022388/">LinkedIn</a>, or check out the source code for my projects on <a href="https://github.com/BrianSlaby">GitHub</a>.</p>
                
                <div className="img-container contact-img-container">
                    <img className="contact-img" src="/public/images/vecteezy-email.svg" alt="Disembodied cartoon hand holding a smartphone next to an open laptop, with a floating cartoon email icon suggesting email being sent or received."/>
                </div>
                
            </div>
        </section>
    )
}