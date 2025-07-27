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
                <li>Home</li>
                <li>About </li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)
}

export default Header;