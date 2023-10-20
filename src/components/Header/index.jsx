import "./Header.css"
import Menu from "./Menu"
import Burger from "./Burger"
import ModeToggle from "./ModeToggle"
import { useState } from "react"

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="top-header">
            <a href="#">CM</a>
            <div className="header-buttons">

            <ModeToggle/>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />    
            </div>
           
        </div>
    )
}

export default Header