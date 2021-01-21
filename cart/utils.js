// find related id from cart[] in violins[]
export function findId(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
}
// calculate line item total price
export function calcItemTotal(cartItem, instrument) {
    return cartItem.quantity * instrument.price;
}
