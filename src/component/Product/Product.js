import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, seller, price, stock, features, star } = props.product;
    // console.log(props.product);

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    // const starIcon = <FontAwesomeIcon icon={faStar} />
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p><small>By :</small> {seller}</p>
                <div className="cartAndFeatures">
                    <div className="">
                        <p className="price">${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button onClick={() => props.addToCardHandler(props.product)} className="cart-button">{cartIcon} add to cart</button>
                    </div>
                    <div className="iconAndFeatures">
                        {/* <p>
                            {starIcon}
                            {starIcon}
                            {starIcon}
                            {starIcon}
                            {starIcon}
                        </p> */}
                        <Rating className="ratingStar"
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star "
                            readonly>
                        </Rating>
                        <h4>Features</h4>
                        <ul>
                            {
                                features.map(feature => <li key={feature?.description}>{feature.description} : {feature.value}</li>)
                            }
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Product;