export function renderTableRow(cartItem, instrument) {
    const quantity = cartItem.quantity;

    const tRow = document.createElement('tr');

    const productTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');

    productTd.textContent = instrument.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = instrument.price;

    tRow.appendChild(productTd);
    tRow.appendChild(quantityTd);
    tRow.appendChild(priceTd);

    return tRow;
}


