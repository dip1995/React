import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import { CDN_URL } from "../utils/constant";
import useRestaurantCard from "../utils/useRestaurantCard";
import ListItems from "./ListItems";

const RestaurantMenu = () => {
  //  const [ResInfo, setResInfo] = useState([]);
  //  const [ResMenu, setResMenu] = useState([]);
  const [showIndex,setShowIndex] = useState(null);

  const { resId } = useParams();
  const data = useRestaurantCard(resId);
  const { ResInfo, ResMenu } = data;
  const { name, cuisines, costForTwoMessage } = ResInfo;
  const categories = ResMenu.filter(
    (item) =>
      item.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  //   console.log(filteredMenu);

  //  if (!ResMenu) return <Shimmer />;
  if (ResMenu.length === 0) return <Shimmer />;

  return (
     <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component
        <ListItems
          key={category?.card?.card.title}
          cardInfo={category?.card?.card}
          showIndex={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)} 
        />
      ))}
    </div>
    // <div className="flex items-center justify-center flex-col">
    //   {filteredMenu.map((item) => {
    //     return (
    //       <ListItems key={item.card.card.title} cardInfo={item.card.card} />
    //     );
    //   })}
    // </div>
  );
};

export default RestaurantMenu;
