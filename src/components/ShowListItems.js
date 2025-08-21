import {CDN_URL} from "../utils/constant";
const ShowListItems = (props) => {
    const itemCards = props.itemCards;
    return (
        <div>
            {
                itemCards.map((item) => {
                    return (
                        <div key={item.card.info.id} className="bg-gray-200 m-4">
                            <div className="flex">
                                <img className="w-16 h-16" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
                                <div className="flex flex-col">
                                    <h3 className="px-2">{item.card.info.description}</h3>
                                    <h4 className="px-2">Price: {item.card.info.defaultPrice / 100}</h4>
                                    <h4 className="px-2">Rating: {item.card.info.avgRating}</h4>
                                </div>
                            </div>  
                           </div>     

                    )
                })
            }
        </div>
    )
}

export default ShowListItems;