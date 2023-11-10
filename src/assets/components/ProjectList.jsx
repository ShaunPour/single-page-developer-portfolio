import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const ProjectList = () => {
        return (
            <div className='projects'>
                <div className="project-header">
                    <h3 className="projects-title">Projects</h3>
                    <button className="contact-middle">Contact Me</button>
                </div>
                <div className="row">
                {projects.map((projects) => {
                    return (
                        <div className='col' key={projects.id}>
                            <ProjectCard projects = {projects}/>
                        </div>
                    );
                }
                )}
                </div>
          </div>
        )
    }

export default ProjectList;