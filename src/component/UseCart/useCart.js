import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb";


const useCart = products => {
    const [cart, setCart] = useState([]);

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

    return [cart, setCart];
}

export default useCart;