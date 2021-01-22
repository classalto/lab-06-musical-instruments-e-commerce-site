import { findId } from './utils.js';

// Persistent Data
const CART = 'CART';
const emptyCart = [];


// get function
export function getCart() {
    const stringCart = localStorage.getItem(CART);

    if (stringCart) {
        return JSON.parse(stringCart);
    } else {
        localStorage.setItem(CART, JSON.stringify(emptyCart));
        return emptyCart;
    }
}
// set function
export function setCart(cart) {
    localStorage.setItem(CART, JSON.stringify(cart));
}
// clear cart
export function clearCart() {
    localStorage.setItem(CART, JSON.stringify(emptyCart));
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
