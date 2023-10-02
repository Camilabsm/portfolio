import "./ProjectItem.css"
import PropTypes from 'prop-types';
import data from "./projects.json"

const ProjectItem = (props) => {
    
    const tecnologies = data.projects[0].techs
    
    return (
        <div className="project-item">
            <img src={props.capa} alt={"Capa do projeto" + props.nome} />
            <h4>{props.nome}</h4>
            <p>{props.descricao}</p>
            <div>
                {tecnologies.map((tech , index) => <p className="tech-item" key={index}>{tech}</p>)}
            </div>
            <a href={props.linkGithub}><img src="" alt={"Veja o código do projeto" + props.nome + "no Github"} /></a>
            <a href={props.linkDeploy}><img src="" alt={"Veja o projeto" + props.nome + "no ar"} /></a>
        </div>
    )
}

ProjectItem.propTypes = {
    techs: PropTypes.array,
    capa: PropTypes.string,
    nome: PropTypes.string,
    descricao: PropTypes.string,
    linkGithub: PropTypes.string,
    linkDeploy: PropTypes.string
}

ProjectItem.defaultProps = {
    propArray: ["1","2","3","4","5"],
    propString: "String value..."
}

export default ProjectItem