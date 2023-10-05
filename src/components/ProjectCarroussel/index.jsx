import "./ProjectCarroussel.css"
import ProjectItem from "./ProjectItem"
import data from "./projects.json"

let projects = data.projects

const ProjectCarroussel = () => {
    return (
       
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
    )
}

export default ProjectCarroussel