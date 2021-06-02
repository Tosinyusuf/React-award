import React from 'react';
import './Bottom.css';
import download from '../images/download.png';
import download1 from '../images/download1.png';
import download2 from '../images/download2.png';


function Bottom () {
    return (
        <div className="bb">
            {/* <div className="container"> */}
                {/* <div className="pack"> */}
                    <div className="first">
                        <div className="car"><img src={download} alt="logo" /></div>
                        <p className="pi">Fast Delivery</p>
                    </div>
                    <div className="second">
                        <div className="mark"><img src={download1} alt="logo" /></div>
                        <p className="p">Buyer Protection</p>
                    </div>
                    <div className="third">
                        <div className="supp"><img src={download2} alt="logo" /></div>
                        <p className="p">Customer Support</p>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Bottom;
