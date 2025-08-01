import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
const Body = () => {
   const [ListOfRestaurants, setListOfRestaurants] = useState([]);
   const [CopyListOfRestaurants, setCopyListOfRestaurants] = useState([]);

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
            <div className="search-container">
               <input type="text" className="search-input" onChange={(e) => {
                  setSearchText(e.target.value);
               }} value={searchText} placeholder="Search for restaurants" />
               <button className="search-btn" onClick={() => {
                  console.log(searchText);
                   const filteredList = ListOfRestaurants.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()))
                     console.log(filteredList);
                   setCopyListOfRestaurants(filteredList);                  
               }}>Search</button>
            </div>
            <button className="btn-rating" onClick={() => {
                const filteredList = ListOfRestaurants.filter((item) => item.info.avgRating > 4.3);
                setListOfRestaurants(filteredList);
            }}>Top Rating</button>
            <div className="card-details">
              {
              CopyListOfRestaurants.map((restaurant) => {
                return <RestaurantCard resData={restaurant?.info} key={restaurant?.info?.id}/>
              })
              }        
           </div>
        </div>
    </div>      
   ) 
}
export default Body;