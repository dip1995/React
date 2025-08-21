import { CDN_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = props.resData;
  return (
    <div className="w-[200px] border border-gray-200 bg-gray-50 rounded-lg p-4 m-2">
      <div className="card">
        <img
        className="w-80 h-28 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      </div>
      <h2 className="font-bold">{name}</h2>
      <p className="card-cuisine">{cuisines.join(", ")}</p>
      <p className="card-rating">Rating: {avgRating}</p>
      <p className="card-review">Review: {costForTwo}</p>
      <p className="font-bold text-md text-green-400">userName: {loggedInUser}</p>
    </div>
  );
};

export const withResaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;
