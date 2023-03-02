import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"

const Header = ({ children }) => {
    const isHeader = true

    return (
        <header className="header">
            <NavLink to="/">
                <img src="/img/logo.png" alt="logo" className="logo" />
            </NavLink>
            {children}
            <NavBar isHeader={isHeader}></NavBar>
        </header>
    )
}

export default Header