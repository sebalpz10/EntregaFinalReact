import { NavLink } from "react-router-dom"
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import CartWidget from "./CartWidget";

const NavBar = (props) => {
    const { isHeader, hrefLinkIg, hrefLinkTw, hrefLinkYt } = props

    if (isHeader) {
        return (
            <nav className="header_navbar">
                <ul className="header_ul">
                    <li className="header_li">
                        <NavLink className="header_link" to="/category/hatchback">Hatchback</NavLink>
                    </li>
                    <li className="header_li">
                        <NavLink className="header_link" to="/category/sedan">Sedan</NavLink>
                    </li>
                    <li className="header_li">
                        <NavLink className="header_link" to="/category/coupe">Coupe</NavLink>
                    </li>
                    <li className="header_li">
                        <NavLink className="header_link" to="/category/pick-up">Pick-Up</NavLink>
                    </li>
                    <li className="header_li">
                        <NavLink className="header_link" to="/category/suv">SUV</NavLink>
                    </li>
                </ul>
                <CartWidget></CartWidget>
            </nav>
        )
    } else {
        return (
            <nav className="footer_nav">
                <ul className="footer_ul">
                    <li className="footer_li">
                        <NavLink to={hrefLinkIg} className="footer_link">
                            <p><FaInstagram></FaInstagram></p>
                        </NavLink>
                    </li>
                    <li className="footer_li">
                        <NavLink to={hrefLinkTw} className="footer_link">
                            <p><FaTwitter></FaTwitter></p>
                        </NavLink>
                    </li>
                    <li className="footer_li">
                        <NavLink to={hrefLinkYt} className="footer_link">
                            <p><FaTwitch></FaTwitch></p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar