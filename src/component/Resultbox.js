import React, { useContext } from 'react';
import './Resultbox.css';
import { GlobalContext } from '../context/GlobalState';


function Resultbox ({products}) {

    const { addProductsToBag, bag } = useContext(GlobalContext);

    let checkBag = bag.find(o => o.id === products.id);


    const BagDisabled = checkBag ? true : false;

    return (
        <div className="bodydisplayr">
           
            <div className="bodycontentr">
                <div className="content1r">
                    <div className="picr"><img src={products.img} alt={products.title} /></div>
                    <div className="writeupr">
                        <h3>{products.title}</h3>
                        <h3>UGX {products.price}</h3>
                    </div>
                    <button className="btnsr"
                     disabled = {BagDisabled} 
                     onClick={() => addProductsToBag(products)}
                    >+ Add</button>
                </div>
            </div>
        </div>
    )
}

export default Resultbox;
