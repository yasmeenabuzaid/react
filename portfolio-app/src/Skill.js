import css from "./image/css.png";
import github from "./image/github.png";
import bootstrap from "./image/bootstrap.png";
import cisco from "./image/cisco.png";
import figma from "./image/figma.png";
import cpp from "./image/cpp.png";
import html from "./image/html.png";
import access from "./image/access.png";

function Skill(){
    return(
        <section>
        <h1 id="h1-skill">-MY SKILLS</h1>
        <div class="parents-skills" id="skills">
            <div class=" skill-card">
                <img src={css} />
                <p>CSS</p>
            </div>
            <div class="skill-card">
                <img src={github}/>
                <p>Github</p>
            </div>
            <div class="skill-card">
                <img src={bootstrap} alt="Bootstrap"/>
                <p>Bootstrap</p>
            </div>
            <div class="skill-card">
                <img src={cisco} alt="Cisco"/>
                <p>Cisco</p>
            </div>
            <div class="skill-card">
                <img src={figma} alt="Figma"/>
                <p>Figma</p>
            </div>
            <div class="skill-card">
                <img src={cpp} alt="C++"/>
                <p>C++</p>
            </div>
            <div class="skill-card">
                <img src={html} alt="HTML"/>
                <p>HTML</p>
            </div>
            <div class="skill-card">
                <img src={access} alt="Access"/>
                <p>Access</p>
            </div>
        </div>
    </section>
    );
}
export default Skill;