import { clearCart } from './cart-api.js';

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
    const orderButton = document.createElement('button');
    const resetButton = document.createElement('button');

    td3.textContent = `Order Total: $${total}.`;
    orderButton.textContent = 'Place Your Order!';
    resetButton.textContent = 'Clear Cart';

    tr.append(td1, td2, td3);
    td2.append(orderButton);
    tableFoot.append(tr);

    orderButton.addEventListener('click', () => {
        window.alert(`Are you sure you want to place an order for $${total}`);
        clearCart();
        window.alert('Your order was successful! Thank you for shopping with us and we look forward to your next purchase!');
        window.location.href = '../index.html';

    });
}
