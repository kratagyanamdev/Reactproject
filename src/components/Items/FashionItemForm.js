import React, { useRef, useState } from 'react';

import classes from './FashionItemForm.module.css';
import Input from './Input';

const FashionItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1
        ) {
            setAmountIsValid(false);
            return;
        }

        amountInputRef.current.value = 1;

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <div className={classes.form} >
            <div className={classes.amount}>
                <Input 
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    step: '1',
                    defaultValue: '1'
                }}
                />
            </div>
            <button onClick={submitHandler}>Add To Cart</button>
            {!amountIsValid && <p>Please enter a valid amount.</p>}
        </div>
    );
};

export default FashionItemForm;