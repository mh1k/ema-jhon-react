import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // product to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([])

    // console.log(cart);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, []);

    useEffect(() => {
        const savedCart = getStoredCart();
        // console.log(savedCart);
        const storedCart = [];
        // console.log(storedCart);
        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key)
                // console.log(key,addedProduct);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart)
        }
    }, [products]);

    const addToCardHandler = (product) => {
        const newCart = [...cart];
        const exiting = cart.find(c => c.key === product.key)
        if (exiting) {
            product.quantity = product.quantity + 1
        }
        else {
            product.quantity = 1
            newCart.push(product)
        }
        setCart(newCart);

        //save to local storage
        addToDb(product.key);
    }
    const handleSearch = event => {
        // console.log(event.target.value);
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchProduct)
        // console.log(matchProduct.length);
    }

    return (
        <div>
            <div className="search-Container">
                <input className="seacrh-Box" placeholder="Search Product" onChange={handleSearch} type="text" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        /* products.map(product => <Product key={product.key} addToCardHandler={addToCardHandler} product={product}></Product>) */
                        displayProducts.map(product => <Product key={product.key} addToCardHandler={addToCardHandler} product={product}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart key={cart.key} cart={cart}>
                        <NavLink to="/review">
                            <button className="order-buttonR">Review your order</button>
                        </NavLink>
                    </Cart>
                </div>

            </div>
        </div>

    );
};

export default Shop;