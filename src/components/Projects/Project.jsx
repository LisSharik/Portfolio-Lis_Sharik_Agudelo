import { useEffect, useState } from "react";
import "./Project.css";
import { get } from "../../utils/getProjects.jsx";
import { Link } from "react-router-dom";

export function Projects(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    get(props.routeProject).then((data) => {
      console.log(data);
      setProjects(data);
    });
  }, [props.routeProject]);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projectsContent" id="projectsContent">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.url} target="_blank">
              <img src={project.imgProject} alt={project.name + "image"} />
            </a>

            <div className="info">
              <h2 className="nameProject">{project.name}</h2>
              <div className="technology">
                {project.tecnology.map((tecno, tecnoIndex) => (
                  <p key={tecnoIndex} className="technologies">
                    {tecno}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
        {props.buton && (
          <Link to={"/projects"} className="btn btn_project">
            See more
          </Link>
        )}
    </section>
  );
}
