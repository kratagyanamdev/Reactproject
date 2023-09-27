import React from 'react';

import './SuccessModal.css';
import { NavLink } from 'react-router-dom';

const SuccessModal = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Success!</h2>
                <p>Your order is successfully placed.</p>
                <NavLink to="/"> <button>Close</button> </NavLink>
            </div>
        </div>
    );
};

export default SuccessModal;