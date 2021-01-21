import { findId, calcItemTotal } from './utils.js';
import { renderTableRow } from './render-table-rows.js';
import { violins } from '../data.js';
import { cart } from './cart-data.js';


const table = document.querySelector('tbody');
const tableFoot = document.querySelector('tfoot');

let total = 0;

for (let item of cart) {
    const cartReturnProduct = findId(item.id, violins);
    const cartItemTotal = calcItemTotal(item, cartReturnProduct);

    total += cartItemTotal;

    const currentItemDom = renderTableRow(item, cartReturnProduct);
    table.append(currentItemDom);
}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order Total: ${total}.`;

tr.append(td1, td2, td3);
tableFoot.append(tr);