import { renderProduct } from '../renderProduct.js';
import { calcOrderTotal, findId } from '../cart/utils.js';
import { calcItemTotal } from '../cart/utils.js';
import { renderTableRow } from '../cart/render-table-rows.js';

const test = QUnit.test;

test('should take in a product and return a li', (expect) => {
    const instrument = {
        id: 1,
        name: 'Violin',
        image: 'assets/violin.png',
        description: 'hand-crafted violin with a deep, glossy varnish.',
        category: 'stringed-instrument',
        price: 100,
        hasBow: true,
        hasStrings: true,
        hasCase: false,
    };
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h3 class="product-name">Violin</h3><img src="assets/violin-one.png" alt="A new violin" class="violin-one"><p class="description">hand-crafted violin with a deep, glossy varnish.</p><p class="has-bow">Bow: Included</p><p class="has-strings">Strings: Included</p><p class="has-case">Case: Sold Separately</p><p class="price">$100</p><button class="buy" value="product-id">Buy Now!</button></li>`;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(instrument);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

// find ID Test
test('should take arguments (id, array) and return an object with matching id.', (expect) => {
    
    //Arrange
    const violins = [
        {
            id: 1,
            name: 'New Violin',
            image: 'assets/violin-one.png',
            description: 'hand-crafted violin with a deep, glossy varnish.',
            category: 'stringed-instrument',
            price: 100,
            hasBow: true,
            hasStrings: true,
            hasCase: false,
        },
    
        {
            id: 2,
            name: 'New Italian Violin',
            image: 'assets/violin2.png',
            description: 'hand-crafted rare violin with a lovely light finish.',
            category: 'stringed-instrument',
            price: 5000,
            hasBow: false,
            hasStrings: true,
            hasCase: false,
        },
    
        {
            id: 3,
            name: 'New French Violin',
            image: './assets/violin3.png',
            description: 'hand-crafted violin with a luscious orange finish.',
            category: 'stringed-instrument',
            price: 10000,
            hasBow: false,
            hasStrings: true,
            hasCase: false,
        },
    
        {
            id: 4,
            name: 'New German Violin',
            image: './assets/violin4.png',
            description: 'hand-crafted violin with a yellow varnish with dark accents.',
            category: 'stringed-instrument',
            price: 10000,
            hasBow: false,
            hasStrings: true,
            hasCase: false,
        }];
    
    // Set up your arguments and expectations
    const expected = {
        id: 2,
        name: 'New Italian Violin',
        image: 'assets/violin2.png',
        description: 'hand-crafted rare violin with a lovely light finish.',
        category: 'stringed-instrument',
        price: 5000,
        hasBow: false,
        hasStrings: true,
        hasCase: false,
    };
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findId(2, violins);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should return total price when given a cart object and instrument object', (expect) => {
    
    //Arrange
    const violins = 
        {
            id: 1,
            name: 'New Violin',
            image: 'assets/violin-one.png',
            description: 'hand-crafted violin with a deep, glossy varnish.',
            category: 'stringed-instrument',
            price: 100,
            hasBow: true,
            hasStrings: true,
            hasCase: false,
        };
    const cart = 
        {
            id: 1,
            quantity: 2,
        };
    
    
    // Set up your arguments and expectations
    const expected = 200;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(cart, violins);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

// tr render test
test('should return total price when given a cart object and instrument object', (expect) => {
    
    //Arrange
    const violins = 
        {
            id: 1,
            name: 'New Violin',
            image: 'assets/violin-one.png',
            description: 'hand-crafted violin with a deep, glossy varnish.',
            category: 'stringed-instrument',
            price: 100,
            hasBow: true,
            hasStrings: true,
            hasCase: false,
        };
    const cart = 
        {
            id: 1,
            quantity: 2,
        };
    
    
    // Set up your arguments and expectations
   
    const expected = `<tr><td>New Violin</td><td>2</td><td>100</td></tr>`;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cart, violins);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});

// calculate order test
test('should return total price when given a cart object and instrument object', (expect) => {
    
    //Arrange

    const violins = {
        id: 1,
        name: 'New Violin',
        image: 'assets/violin-one.png',
        description: 'hand-crafted violin with a deep, glossy varnish.',
        category: 'stringed-instrument',
        price: 100,
        hasBow: true,
        hasStrings: true,
        hasCase: false,
    };
    const cart = 
    
        {
            id: 1,
            quantity: 2,
        };
    
    
    // Set up your arguments and expectations
   
    const expected = 200;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(cart, violins);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});