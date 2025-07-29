import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = props.resData;
  return (
    <div className="card-item">
      <div className="card">
        <img
        className="card-img"
        alt="res-logo"
        src="https://picsum.photos/id/1062/800/600"
      />
      </div>
      <h2 className="card-title">{name}</h2>
      <p className="card-cuisine">{cuisines.join(", ")}</p>
      <p className="card-rating">Rating: {avgRating}</p>
      <p className="card-review">Review: ₹{costForTwo}</p>
    </div>
  );
};
export default RestaurantCard;
