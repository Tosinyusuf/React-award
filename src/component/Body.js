import React, {useState} from 'react';
import './Body.css';
import Fuse from 'fuse.js';
import Bigscreen from './Bigscreen';
import {data} from '../data';
import SingleProducts from './SingleProducts';

function Body() {
    const [click, setClick] = useState(false);
    const [searching,setSearching] = useState(false)
    const [message, setMessage] = useState(null);
    const handleClick = () => setClick(!click);
    const [products] = useState(data);
    const [productCopy, setProductCopy] = useState(data);



  const handleProducts = (e) => {
      setSearching(true)
    console.log(e.target.value);
    
    // let productCopy;

    if (e.target.value==="All"){
      setProductCopy(products)
      
    }else {
      setProductCopy(products.filter(item => item.cat===e.target.value))
    }
    // setProductCopy(productCopy)
  }

  


  
    const fuse = new Fuse(products,{
        keys: ["title", "cat"],
    });

    
    const searchProducts = (pattern) => {
        if (!pattern) {
            setProductCopy(products)
        }

    const result = fuse.search(pattern);
     const prorRes = result.map(products=>products.item)
    if (!result.length) {
        setSearching(false)
        setMessage(<div><span className="nos">No result for products...</span><span className="click">pls review categories to see products</span></div>)
    } 
   
        setProductCopy(prorRes)

}
    return (

        <div className="container">
            <div className="body12">
                <div className="body">
                    
                    <div className="navmenu" onClick={handleClick}><i className={click ? 'i fas fa-times' : 'i fas fa-bars'} /></div>
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <button className="beauty-health" value="Beauty-Health" onClick={handleProducts} >
                    Beauty & Health(3)
                    </button>
                    <button className="womens-shoe" value="women-shoes" onClick={handleProducts}>
                    Women's Shoes (3)
                    </button>
                    <button className="mens-shoe" value="men-shoes" onClick={handleProducts}>
                    Men's Shoes (4)
                    </button>
                    <button className="Womens-Accessories" value="women-accesories" onClick={handleProducts}>
                    Women's Accessories (4)
                    </button>
                    <button className="men-accessories" value="men-accesories" onClick={handleProducts}>
                    mens Accessories (5)
                    </button>
                    <button className="Bags" value="Bags" onClick={handleProducts}>
                        Bags (6)
                    </button>
                    <button className="view" value="All" onClick={handleProducts}>View all categories</button>
                </div>
                </div>
                
                <div class>
                
                    <div className="form">
                    <input type="text"
                        placeholder="Search for products..."
                        onChange={(e)=> searchProducts(e.target.value)}
                    />
                    <button type="submit" className='searchicon'>
                        <i className="fas fa-search se"></i>
                    </button>
                    </div>
                    
                        
                        {productCopy.map(product => {
                        return <SingleProducts key={product.id} product= {product} />
                        })}
                </div>
            
            
                <div className="details">
                    <Bigscreen />
                    
                </div>
            </div>
        
        </div> 
    )
}

export default Body;
