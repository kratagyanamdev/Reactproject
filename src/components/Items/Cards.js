import React, { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../../redux/Slices/WishListSlice";

import { FaHeart } from "react-icons/fa"


import FashionItemForm from './FashionItemForm';
import CartContext from '../../store/cart-context';

import './Cards.css'

function Cards(props) {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToWishList = () => {
        dispatch(add(props));
    }

    const removeFromWishList = () => {
        dispatch(remove(props.id));
    }

    return(
        <div className='productList'>
            <div key={props.id} className='productCard'>

                {
                    cart.some((p) => p.id === props.id) ?
                    (<FaHeart onClick={removeFromWishList} className="filled-heart" />) :
                    (<FaHeart onClick={ addToWishList } className="unfilled-heart" />)
                }

                <img src={props.image} alt='product-img' className='productImage'></img>

                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <p>{props.description}</p>
                    <div className='displayStack__1'>
                        <div className='productPrice'>₹ {props.price}</div>
                    </div>
                </div>
                <div>
                    <FashionItemForm id={props.id} onAddToCart={addToCartHandler} />
                </div>
            </div>
        </div>
    )
}

export default Cards;