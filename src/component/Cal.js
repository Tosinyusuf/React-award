import React from 'react';
import { Link } from 'react-router-dom';
import './Cal.css';

function Cal ({ bag}) {
    const total = bag.reduce((prevVval, currentVal) => prevVval + currentVal.price,
    0
    );

    return (
        
    <div className="calculation">
        <div className="cal">
            <p>Item Total</p>
            <p>UGX { total}</p>
        </div>
        <div className="cal">
            <p>Delivery</p>
            <p>Free</p>
        </div>
        <div className="cal">
            <p>Total</p>
            <p>UGX {total}</p>
        </div>
        <div className="tax">Inclusive of all taxes</div>
        <div className="tot">
            <p>Total</p>
            <p>UGX { total}</p>
        </div>
        <div className="check">
            <Link to ='/Account' className ='nav-links'>
                    checkout
            </Link>
        </div>
    </div>
    )
}

export default Cal;