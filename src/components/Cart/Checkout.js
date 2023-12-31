import { useRef, useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import CartContext from '../../store/cart-context';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length !== 6; 

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    });

    const cartCtx = useContext(CartContext);

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();
    const navigate = useNavigate();

const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = !isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        postalCode: enteredPostalCodeIsValid,
        city: enteredCityIsValid
    });

    const formIsValid = 
        enteredNameIsValid &&
        enteredStreetIsValid &&
        enteredPostalCodeIsValid &&
        enteredCityIsValid;
    
    if (!formIsValid) {
        return;
    }
    
    cartCtx.clearCart();

    navigate('/success');
};

const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
    }`;
const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
    }`;
const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
    }`;
const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
    }`;

return (
    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} />
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef} />
            {!formInputsValidity.street && <p>Please enter a valid street!</p>}
        </div>
        <div className={postalCodeControlClasses}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalCodeInputRef} />
            {!formInputsValidity.postalCode && <p>Please enter a valid postal code (5 characters long)!</p>}
        </div>
        <div className={cityControlClasses}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef} />
            {!formInputsValidity.city && <p>Please enter a valid city!</p>}
        </div>
        <div className={classes.actions}>
            <NavLink to= "/cart"> <button type='button' onClick={props.onCancel}>
                Cancel
            </button> </NavLink>
            <button className={classes.submit}>Confirm</button>
        </div>
    </form>
    );
};

export default Checkout;