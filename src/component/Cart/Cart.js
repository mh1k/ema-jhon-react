import React from 'react';

import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    /* ################################################################################### */
    //FIRST SYSTEM
    // const totalReducer = (previous, product) => previous + product.price;
    // const itemsTotal = cart.reduce(totalReducer,0);

    //SECOND SYSTEM
    // const itemsTotal = cart.reduce((previous, product) => previous + product.price, 0);

    //THIRD SYSTEM
    let totalQuantity = 0;
    let itemsTotal = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        itemsTotal = itemsTotal + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    /* #################################################################################### */

    const shippingCharge = itemsTotal * 0.12;
    // const shippingCharge = cart.shipping;
    // console.log(shippingCharge);
    const beforeTax = itemsTotal + shippingCharge;
    const afterTax = beforeTax * 0.1;
    const orderTotal = beforeTax + afterTax;


    return (
        <div>
            <div className="cart-header">
                <h2>Order Summary</h2>
                <p style={{ fontSize: "20px" }}>Items ordered : {totalQuantity} </p>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Items :</td>
                        <td>${itemsTotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping and Handling :</td>
                        <td>${shippingCharge.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax :</td>
                        <td>${beforeTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax(10%) :</td>
                        <td>${afterTax.toFixed(2)}</td>
                    </tr>
                    <tr className="order-total">
                        <td>Order Total :</td>
                        <td>${orderTotal.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <div className="order-button">
                {props.children}
            </div>
        </div>
    );
};

export default Cart;