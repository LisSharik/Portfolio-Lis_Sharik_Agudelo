import { useEffect } from "react";
import "./Skills.css";

export function Skills() {

    useEffect(()=>{
        const icons = document.querySelectorAll(".skillsIcons i");

        icons.forEach(icon =>{
            icon.addEventListener("mouseover", () =>{
                icon.classList.add("colored");
            })
            icon.addEventListener("mouseout", ()=>{
                icon.classList.remove("colored")
            })
        })
    
    },[])


  return (
    <section className="skills" id="skillsContent">
      <h2>Skills</h2>
      <div className="skillsContent">
        <div className="softwareDevelop">
          <h3>Develop Skills</h3>

          <div className="skillsIcons">
            <i className="devicon-html5-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-java-plain"></i>
            <i className="devicon-mysql-original"></i>
            <i className="devicon-python-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-git-plain"></i>

          </div>
        </div>

        <div className="softwareDesign">
          <h3>Graphic Design Tools</h3>
          <div className="skillsDesign">
            <img
              src="/img/icons/icon_photoshop.png"
              alt=""
              className="iconDesign"
            />

            <img
              src="/img/icons/icon_illustrator.png"
              alt=""
              className="iconDesign"
            />

            <img
              src="/img/icons/icon_after.png"
              alt=""
              className="iconDesign"
            />

            <img
              src="/img/icons/icon_figma.png"
              alt=""
              className="iconDesign figma"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
