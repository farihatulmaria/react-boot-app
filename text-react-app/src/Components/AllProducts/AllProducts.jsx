import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css';

const AllProducts = (props) => {
    
    const {setCartCount} = props;

    const {products, setproducts} = useState([])
    useEffect(() => {

        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(data => setproducts(data))
        
    },[products])

    return (
        <div className='product-container container'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {
                    products.map((pd) =><Product key={pd.id} products={pd} setCartCount ={setCartCount}></Product>)
                }
                
            </div>
        </div>
    );
};

export default AllProducts;