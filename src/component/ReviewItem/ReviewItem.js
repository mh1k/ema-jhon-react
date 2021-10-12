
import React from 'react';



const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product
    const { handleRemove } = props


    return (
        <div style={{ marginLeft: "10px" }} className="product">
            <div className="product-details">
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{quantity}</p>

                <button onClick={() => handleRemove(key)} className="cart-button">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;