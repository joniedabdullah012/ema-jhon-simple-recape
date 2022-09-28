import React from 'react';
import './product.css'

const Product = (props) => {

    const { product, addToHandleCart } = props;
    const { img, name, seller, ratings, shipping, price } = product

    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price:${price}</p>

                <p>Seller:{seller}</p>
                <p>ratings:{ratings}</p>

            </div>
            <button onClick={() => props.addToHandleCart(product)} className='btn-cart'>
                <p >Add to cart</p>
            </button>

        </div>

    );
};

export default Product;