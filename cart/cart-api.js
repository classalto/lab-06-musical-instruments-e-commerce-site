import { findId } from './utils.js';

// Persistent Data
const CART = 'CART';
const defaultEmptyCart = [];


// get function
export function getCart() {
    const stringCart = localStorage.getItem(CART);

    if (stringCart) {
        return JSON.parse(stringCart);
    } else {
        const stringyEmptyCart = localStorage.setItem(CART, JSON.stringify(defaultEmptyCart));
        return stringyEmptyCart;
    }
}
// set function
export function setCart(cart) {
    localStorage.setItem(CART, JSON.stringify(cart));
}
// clear cart
export function clearCart() {
    localStorage.setItem(CART, JSON.stringify(defaultEmptyCart));
}
// add to cart function
export function addToCart(id) {
    const cart = getCart();
    const cartItem = findId(id, cart);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newCartItem = {
            id: id,
            quantity: 1
        };
        cart.push(newCartItem);
    }
    setCart(cart);
}
