import React from 'react';
import './BottomTop.css'
import logo from "../images/logo.jpg";

function BottomTop () {
    return (
        <div className="container">
        <div className="Bt">
           <div className="logo"> <img src={logo} alt="logo" /> </div> 
            <div className="bt1">
               <h3>Target</h3>
                <p>Charm Towers,Plot 12 Nkruma Rd, Kampala, Ug</p>
            </div>
            <div className="mobile">
                <div>
                    <p><i class="fas fa-shopping-bag"></i></p>
                    <h2>Bag</h2>
                </div>
                <div>
                    <p><i class="far fa-user"></i></p>
                    <h2>Account</h2>
                </div>

            </div>
        </div>
        </div>
        
    )
}

export default BottomTop;
