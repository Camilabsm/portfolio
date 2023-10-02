import "./ProjectCarroussel"
import ProjectItem from "./ProjectItem"

const ProjectCarroussel = () => {
    return (
        <div>
            <ProjectItem 
                techs = {["HTML", "CSS", "JavaScript", "ReactJS"]}
                capa = ""
                nome = "" 
                descricao = ""
                linkGithub = ""
                linkDeploy = ""
            />
        </div>
    )
}

export default ProjectCarroussel