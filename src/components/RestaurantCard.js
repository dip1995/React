import resList from "../resList";
import { useState } from "react";

const RestaurantCard = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState(resList.restaurants);
    return (
        <div className="cart-container">
            <button className="btn-rating" onClick={() => {
                const filteredList = ListOfRestaurants.filter((item) => item.ratings.average > 4);
                setListOfRestaurants(filteredList);
            }}>Top Rating</button>
            <div className="card-details">
              {
              ListOfRestaurants.map((params) => {
                return (
                <div key={params.id} className="card-item">
                    <div className="card">
                    <img className="card-img" src={params.imageUrl} alt="cart-item" />
                    </div>
                    <h2 className="card-title">{params.name}</h2>
                    <p className="card-cuisine">{params.cuisines.join(", ")}</p>
                    <p className="card-rating">Rating: {params.ratings.average}</p>
                    <p className="card-review">Review: ₹{params.ratings.totalReviews}</p>
                </div>
                )
              })
              }        
           </div>
        </div>
    )

}
export default RestaurantCard;