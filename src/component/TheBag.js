import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

function TheBag ({ product, type }) {

    const {removeProductsfromBag} = useContext(GlobalContext);

    return (
        <div>
           
            <div className="bodydisplay">
                <div className="bodycontent">
                    <div className="content1">
                        <div className="pic">{<img src={product.img} alt={product.title} />}</div>
                        <div className="writeup">
                            <h3>{product.title}</h3>
                            <h3>UGX {product.price}</h3>
                        </div>
                        <button className="btns" onClick={() => removeProductsfromBag(product.id) }>remove</button>
                    </div>
                </div>

            </div>

          
                
        </div>
    )
}
export default TheBag;