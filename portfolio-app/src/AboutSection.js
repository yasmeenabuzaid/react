import about from "./image/about.jpg"
function AboutSection() {
    return (
        <section id="About" className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h1><b>- A little about me:</b></h1>
                    <p>
                        Hi, I'm Yasmeen Abu Zaid, a 19-year-old from Jordan / Aqaba. I am pursuing a Network Information Security Diploma at BAU. My interests include Graphic Interface Design. You can reach me at <a href="mailto:yasmeenabuzaid552@gmail.com">yasmeenabuzaid552@gmail.com</a> or call me at 0795709238.
                    </p>
                </div>
                <div className="about-image">
                    <img src={about} alt="About Yasmeen" />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
