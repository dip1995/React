import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
return (
    <div className="flex justify-between items-center bg-pink-50 shadow-sm">
        <div className="logo-container">
            <div className="logo">
                <img
                className="w-28"
                src={LOGO_URL} alt="logo" />
                </div>
        </div>
        <div className="nav-items">
            <ul className="flex flex-row gap-4 px-2"> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link> </li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
            </ul>
        </div>
    </div>
)
}

export default Header;