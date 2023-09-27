import React, { useState, useContext, useEffect } from 'react';

import { FaHeart } from "react-icons/fa"
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import { NavLink, useNavigate } from 'react-router-dom';

const HeaderButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const navigate = useNavigate();

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    const handleLogout = (e) => {
        e.preventDefault();
        // login logic here
        props.setIsLoggedIn(false);

        navigate('/');
    };

    return (
        <div className={classes.headerButton}>
        <NavLink to="/" className={classes.navLink}>Home</NavLink>
        {
            props.isLoggedIn ? 
            (<NavLink to="/" className={classes.navLink} onClick={ handleLogout }>Logout</NavLink>) :
            (<NavLink to="/login" className={classes.navLink}>Login/SignUp</NavLink>)
        }
        <NavLink to="/wishlist">
            <FaHeart className={classes.icon}/>   
        </NavLink>

        <NavLink to="/cart" >
            <button className={btnClasses} >
            <span className={classes.icon} >
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge} >{numberOfCartItems}</span>
            </button>
        </NavLink>
        </div>
    );
};

export default HeaderButton;