import React from 'react';
import './Product.css';
const Product = (props) => {
    const {setCartCount} = props;
    return (
        <div className='col'>
            <div className="card h-100">
                {/* <img src={props.products.image} className="card-img-top" alt=""> */}
                <div className="card-body">
                    <h5 className="card-title">{props.products.title}</h5>
                    <p className="card-text">{props.products.description}</p>
                    <button onClick={setCartCount}>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
