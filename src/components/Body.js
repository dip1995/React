import RestaurantCard,{withResaurantCard} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
   const [ListOfRestaurants, setListOfRestaurants] = useState([]);
   const [CopyListOfRestaurants, setCopyListOfRestaurants] = useState([]);
   const RestaurantCardWithHOC = withResaurantCard(RestaurantCard);

   const [searchText, setSearchText] = useState("");

    useEffect(() => {
    fetchRestaurants();
    }, []);

   const fetchRestaurants = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setCopyListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }
  
   return ListOfRestaurants.length === 0 ? <Shimmer /> :  (
    <div className="body-container">
     <div className="cart-container">
            <div className="flex gap-4 items-center py-2 px-4">
               <input type="text" className="w-30 border p-4 rounded-lg" onChange={(e) => {
                  setSearchText(e.target.value);
               }} value={searchText} placeholder="Search for restaurants" />
               <button className="w-26 h-26 p-4 border border-gray text-white text-sm bg-blue-300 rounded-md" onClick={() => {
                  console.log(searchText);
                   const filteredList = ListOfRestaurants.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()))
                     console.log(filteredList);
                   setCopyListOfRestaurants(filteredList);                  
               }}>Search</button>
            <div className="flex flex-row">
            <button className="border border-gray p-4 text-white text-sm bg-teal-500 rounded-md" onClick={() => {
                const filteredList = ListOfRestaurants.filter((item) => item.info.avgRating > 4.3);
                setListOfRestaurants(filteredList);
            }}>Top Rating</button>
            </div>
            </div>
            <div className="flex flex-wrap">
              {
              CopyListOfRestaurants.map((restaurant) => {
                return <Link key={restaurant?.info?.id} to={'/restaurant/'+restaurant?.info?.id}>
                  {
                     restaurant?.data?.promoted ? <RestaurantCardWithHOC resData={restaurant?.info} /> : <RestaurantCard resData={restaurant?.info}/>
                  }
                  </Link>
              })
              }        
           </div>
        </div>
    </div>      
   ) 
}
export default Body;