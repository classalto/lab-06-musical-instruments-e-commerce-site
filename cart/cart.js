import { findId, calcOrderTotal } from './utils.js';
import { renderTableRow, renderOrderRow } from './render-table-rows.js';
import { violins } from '../data.js';
import { cart } from './cart-data.js';


const table = document.querySelector('tbody');

let total = 0;


for (let item of cart) {
    const cartReturnProduct = findId(item.id, violins);
   

    total += calcOrderTotal(item, cartReturnProduct);

    const currentItemDom = renderTableRow(item, cartReturnProduct);
    table.append(currentItemDom);
}

renderOrderRow(total);