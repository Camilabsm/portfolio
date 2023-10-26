import "./ModeToggle.css"
import { useEffect, useState } from "react";

const ModeToggle = () => {
    const [mode, setMode] = useState(false);
    
    const toggleClick = () => {
        setMode(!mode)
    }
    
    useEffect(() =>{
        if(mode){
            document.body.classList.add("lightMode")
        } else {
            document.body.classList.remove("lightMode")
            document.body.classList.add("darkMode")
        }
        // false - dark
        // true - light
    })    
    
    return (
        <div>
            <button onClick={toggleClick}>{mode ? <img src="/images/moon.png"/> : <img src="/images/sun.png"></img>} </button>
        </div>
    );
}

export default ModeToggle;

