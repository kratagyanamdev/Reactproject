import React, {Fragment} from 'react';

import classes from './Header.module.css';
import HeaderButton from './HeaderButton';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header} >
                <h1>React Shop</h1>
                <HeaderButton  isLoggedIn = { props.isLoggedIn } setIsLoggedIn = {props.setIsLoggedIn}/>
            </header>
        </Fragment>
    );
};

export default Header;