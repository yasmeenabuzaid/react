import prof from './image/prof.jpg';
function  HeadSection(){
    return(
        <div>
        <section id="head-section">
        <video class="background-video" autoplay muted loop>
            {/* <source src="video/back_ground_video.mp4" type="video/mp4"> */}
        </video>
        
        <div class="main">
            <div class="title">
                <h4>Welcome to my Portfolio Website</h4>
                <h1><b>Hi, I’m Yasmeen</b></h1>
                <h3>Network and Information Security and Web Development</h3>
                <div class="title-buttons">
                    <a href="#About">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#figma-projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div class="personal-image">
                <img src={prof} />
            </div>
        </div>
    </section>

    </div>
    );
}
export default HeadSection;