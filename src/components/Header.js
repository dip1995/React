import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import {useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const {loggedInUser} = useContext(UserContext);  
  const selectedItems = useSelector((store) => store.cart.items);

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
                <li><Link to="/Cart">Cart {selectedItems.length}</Link></li>
                <li><button className="w-5 h-5 bg-gray mr-2">Login</button></li>
                <li><p className="font-bold text-md">{loggedInUser}</p></li>
            </ul>
        </div>
    </div>
)
}

export default Header;