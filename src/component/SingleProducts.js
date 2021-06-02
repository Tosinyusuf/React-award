import React, { useContext } from 'react';
import './SingleProducts.css';
import { GlobalContext } from '../context/GlobalState';


function SingleProducts ({product}) {

    const { addProductsToBag, bag } = useContext(GlobalContext);

    let checkBag = bag.find(o => o.id === product.id);


    const BagDisabled = checkBag ? true : false;

    return (
        <div className="bodydisplay">
           
            <div className="bodycontent">
                <div className="content1">
                    <div className="pic"><img src={product.img} alt={product.title} /></div>
                    <div className="writeup">
                        <h3>{product.title}</h3>
                        <h3>UGX {product.price}</h3>
                    </div>
                    <button className="btns"
                     disabled = {BagDisabled} 
                     onClick={() => addProductsToBag(product)}
                    >+ Add</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProducts;
