import orange from "./image/orange.png";
import ba from "./image/ba.jpg";
function Education(){
return(
    <section>
       <h1 id="h1-skill">- Education </h1>
      <div class="parents-skills" id="skills">
        <div class="skill-card">
            <img src={ba}/>
            <p>BAU</p>
        </div>
        <div class="skill-card" >
          <img src={orange}/>
            <p>orange</p>
        </div>
        </div>
</section>


);
}
export default Education;