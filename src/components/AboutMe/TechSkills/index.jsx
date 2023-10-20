import "./TechSkills.css";
import data from "./skills.json";

const techStack = data.skills;

const TechSkills = () => {
    return (
        <div className="tech-stack">
            <p className="sup-text">Tech Stack</p>
            <ul>
                {techStack.map((skill) => { 
                    return(
                        <li key={skill.id}><img className="tech-skill" src={skill.skillImage} alt={skill.skillAlt}/> {skill.skillName}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TechSkills;