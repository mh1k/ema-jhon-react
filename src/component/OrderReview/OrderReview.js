import React from 'react';
import { useHistory } from 'react-router';

import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../Hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import '../Shop/Shop.css'
import useCart from '../UseCart/useCart';
const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history =useHistory();
    // console.log(cart);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        deleteFromDb(key)
        setCart(newCart)
    }
    const handlePlaceOrder = () => {

        history.push('/shipping')
        /* setCart([])
        clearTheCart() */
    }
    return (
        <div className="shop-container">
            <div>
                {
                    cart.map(product => <ReviewItem key={product.key} handleRemove={handleRemove} product={product}></ReviewItem>)
                }
            </div>
            <div>
                <Cart cart={cart}>

                    <button onClick={handlePlaceOrder} className="order-buttonR">Porceed to shipping</button>

                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;