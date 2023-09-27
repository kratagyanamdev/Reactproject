import React, { Fragment } from 'react';

import FashionSummary from './FashionSummary';
import AvailableItems from './AvailableItems';
import '../../index.css'

const Items = props => {
    return (
        <Fragment>
            <FashionSummary />
            <div className='item'>
                <AvailableItems category = { props.category }/>
            </div>
        </Fragment>
    );
};

export default Items;