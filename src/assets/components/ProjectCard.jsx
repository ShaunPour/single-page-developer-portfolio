const ProjectCard = (props) => {
    return (
        <div className="project">
            <img src={props.projects.image} alt={props.projects.name} className="card-img" id={`card-img-${props.projects.id+1}`}/>
            <h3 className="card-title">{props.projects.name}</h3>
            <ul className="tech-stack">
            {props.projects.stack.map((item => (
                  <li className="stack-itm" key={props.projects.id}>
                     {item}
                  </li>
               )))}
            </ul>
            <div className="btn-div">
                <a href={props.projects.site}><button className="code">View Project</button></a>
                <a href={props.projects.repository}><button className="site">View Code</button></a>
            </div>
        </div>
    )
}

export default ProjectCard;