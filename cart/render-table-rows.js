export function renderTableRow(cartItem, instrument) {
    const quantity = cartItem.quantity;

    const tRow = document.createElement('tr');

    const productTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');

    productTd.textContent = instrument.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = instrument.price;

    tRow.append(productTd, quantityTd, priceTd);

    return tRow;
}

export function calcItemTotal(cartItem, instrument) {
    return cartItem.quantity * instrument.price;
}