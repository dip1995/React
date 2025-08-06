import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import { CDN_URL } from "../utils/constant";
import useRestaurantCard from "../utils/useRestaurantCard";


const RestaurantMenu = () => {
//  const [ResInfo, setResInfo] = useState([]);
//  const [ResMenu, setResMenu] = useState([]);

 const { resId } = useParams();
 const data = useRestaurantCard(resId);
 const {ResInfo,ResMenu} = data;

const { name, cuisines, costForTwoMessage } = ResInfo; 

//  if (!ResMenu) return <Shimmer />;
 if (ResMenu.length === 0) return <Shimmer />;

 return (
    <div className="restaurant-menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{costForTwoMessage}</h3>
        <div className="restaurant-menu-items">
        {
            ResMenu.map((item) => {
             return <div className="restaurant-card" key={item.dish.info.id}>
             <h4>{item.dish.info.name}</h4>
             <img className="res-image" src={CDN_URL+item.dish.info.imageId} alt={item.dish.info.name} />
             <p>{item.dish.info.category}</p>
             {/* <p>{item.dish.info.description}</p> */}
             <p>Rs {item.dish.info.finalPrice/100 || item.dish.info.price/100}</p>
             </div>
            })
        }
        </div>
    </div>
 )

}

export default RestaurantMenu;