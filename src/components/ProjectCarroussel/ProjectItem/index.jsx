import "./ProjectItem.css"
import PropTypes from 'prop-types';

const ProjectItem = (props) => {
    
    const tecnologies = props.techs
    
    return (
        <div className="project-item">
            <img className="project-cover" src={props.capa} alt={"Capa do projeto " + props.nome} />
            <h4>{props.nome}</h4>
            <p>{props.descricao}</p>
            <div>
                {tecnologies.map((tech , index) => <p className="tech-item" key={index}>{tech}</p>)}
            </div>
            <div className="icons">
                <img src="/public/images/favorite_FILL0_wght300_GRAD0_opsz24.svg" alt="Ícone de favoritar" />
                <a href={props.linkGithub}><img className="icons-item" src="/public/images/icons8-github.svg" alt={"Veja o código do projeto " + props.nome + " no Github"} /></a>
                <a href={props.linkDeploy}><img className="icons-item" src="/public/images/open_in_new_FILL0_wght300_GRAD0_opsz24.svg" alt={"Veja o projeto " + props.nome + " no ar"} /></a>
            </div>
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