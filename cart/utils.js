//import { cart } from './cart-data';
//import { violins } from '../data.js';

// find related id from cart[] in violins[]
export function findId(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
}