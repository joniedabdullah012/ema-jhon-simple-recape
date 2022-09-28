import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const addToHandleCart = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (

        <div className="shop-container">

            <div class='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToHandleCart={addToHandleCart}

                    >

                    </Product>)
                }
            </div>
            <div className='cart-container'>
                <h4>Products summery</h4>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>

    );
};

export default Shop;