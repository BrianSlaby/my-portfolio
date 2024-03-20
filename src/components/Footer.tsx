

export default function Footer() {

    return (
        <footer>
            <h3>Brian Slaby</h3>
            <p>brian.slaby@gmail.com</p>
                
            <div className="footer-links-container">
                <div>
                    <a target="_blank" href="https://github.com/BrianSlaby">
                        <img src="/icons/github.svg" alt="GitHub icon" />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.linkedin.com/in/brian-slaby-78022388/">
                        <img src="/icons/linkedin.svg" alt="LinkedIn icon" />
                    </a>
                </div>
            </div>
            <p className="small-text">Background image by <a href="https://unsplash.com/@pawel_czerwinski?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pawel Czerwinski</a> on <a href="https://unsplash.com/photos/a-blurry-photo-of-a-black-and-green-background-RmMCdS-Nh74?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </p>
            <p className="small-text">Updated 2024</p>
        </footer>
    )
}