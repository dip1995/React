import { useSelector } from "react-redux";
import ShowListItems from "./ShowListItems";

const Cart = () => {
 
    const selectedItems = useSelector((store) => store.cart.items);

    return (
        <div className="cart-container">
        <ShowListItems itemCards={selectedItems}/> 
        </div>
    );
}

export default Cart;