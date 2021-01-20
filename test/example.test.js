import { renderProduct } from '../renderProduct.js';

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