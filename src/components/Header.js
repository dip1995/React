import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
return (
    <div className="header-container">
        <div className="logo-container">
            <div className="logo">
                <img
                className="logo-image"
                src={LOGO_URL} alt="logo" />
                </div>
        </div>
        <div className="nav-items">
            <ul className="nav-list"> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link> </li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
            </ul>
        </div>
    </div>
)
}

export default Header;