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

export function renderOrderRow(total) {
    
    const tableFoot = document.querySelector('tfoot');

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.textContent = `Order Total: ${total}.`;

    tr.append(td1, td2, td3);
    tableFoot.append(tr);
}
