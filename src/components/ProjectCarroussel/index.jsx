import "./ProjectCarroussel.css"
import ProjectItem from "./ProjectItem"
import data from "./projects.json"

let projects = data.projects

const ProjectCarroussel = () => {
    return (
      <div id="projects" className="projects-container">
        <h1>meus projetos</h1>
          <div className="carroussel">
            { projects.map((project) => {
              return (
                  <ProjectItem key={project.id}
                      techs = {project.techs}
                      capa = {project.cover}
                      nome = {project.name}
                      descricao = {project.description}
                      linkGithub = {project.linkGithub}
                      linkDeploy = {project.linkDeploy}
                  />
              )
            }) }
          </div>        
      </div>    
    )
}

export default ProjectCarroussel