import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantCard = (resId) => {
 const [ResInfo, setResInfo] = useState([]);
 const [ResMenu, setResMenu] = useState([]);
   useEffect(() => {
    fetchRestaurantMenu();
 }, []);

 const fetchRestaurantMenu = async () => {
    const json = await fetch(MENU_API+resId);
    const data = await json.json();
    setResInfo(data?.data?.cards[2]?.card?.card?.info);
    setResMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel);
 }
    return {ResInfo:ResInfo,ResMenu:ResMenu};
}

export default useRestaurantCard;