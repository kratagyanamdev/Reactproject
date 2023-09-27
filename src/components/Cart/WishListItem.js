import { useDispatch } from "react-redux";
import { remove } from "../../redux/Slices/WishListSlice";
import "./WishListItem.css";

const WishListItem = ({item, itemIndex}) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
    }

    return (
        <div className="wishListCard">
            <img src={item.image} alt = "WishList Item" className="productImage" />
            <div>
            <h3 className="productName"> {item.name}</h3>
            <div className="displayStack__1">
                <p className="productPrice" > ₹ {item.price}</p>
            <button onClick={removeFromCart} className="delete-button">
                Remove
            </button>
            </div>

            </div>
            </div>

        
    );
};

export default WishListItem;