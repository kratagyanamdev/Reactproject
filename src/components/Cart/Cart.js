import React from 'react';
import './Cart.css';
import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { NavLink, useNavigate } from 'react-router-dom';

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const navigate = useNavigate();

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1});
    };



    const proceedHandler = () => {
        if(props.isLoggedIn) {
            navigate('/checkout');
        } else {
            navigate('/login');
        }
    }


return (
    <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        {cartCtx.items.length > 0 ? (<div>
        <div className="cart-items">
        { cartCtx.items.map((item) => (
                    <CartItem 
                        key={item.id}
                        name={item.name} 
                        amount={item.amount} 
                        price={item.price}
                        image={item.image}
                        onRemove={ cartItemRemoveHandler.bind(null, item.id) }
                        onAdd={ cartItemAddHandler.bind(null, item) }
                    />
                )) }      
        </div>
        <p className="cart-total">Total: ₹{ totalAmount }</p>
        <div className="button-container">
        <NavLink to="/"> <button className="button" > Cancel </button> </NavLink>
        <button className="button" onClick={ proceedHandler }>Proceed to Checkout</button>
        </div>

        </div>) : (<h2 className="empty-cart">Your Cart is Empty</h2>) }

        </div>
    );
};

export default Cart;