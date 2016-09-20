var shopping_basket = require( '../shopping_basket');
var assert = require( 'assert' );

describe( 'Shopping Basket', function() {

  beforeEach( function() {
    shopping_basket.items = [
  { name: "fish",
    price: 5
  },
  { name: "steak",
    price: 5,
  },
  { name: "wine",
    price: 10
  }
    ],
    shopping_basket.totalCost = 0,
    shopping_basket.discountCard = true
  })

  it( "should start with three items", function() {
    assert.equal( 3, shopping_basket.items.length )
  })

  it( "can add item", function() {
    shopping_basket.add({name:"chocolate", price: 5});
    assert.equal( 4, shopping_basket.items.length )
  })

  it( "can remove item", function() {
    shopping_basket.remove({name:"wine", price:10});
    assert.equal( 2, shopping_basket.items.length )
  })

  it( "total cost starts at 20", function() {
    shopping_basket.calculateTotalCost();
    assert.equal( 20, shopping_basket.totalCost)
  })

  it( "can get discount if over 20", function() {
    shopping_basket.add({name:"chocolate", price:5});
    shopping_basket.calculateTotalCost();
    assert.equal( 22.5, shopping_basket.totalCost)
  })

  it( "can get discount with discount card", function() {
    shopping_basket.add({name:"chocolate", price:5});
    shopping_basket.calculateTotalCost();
    shopping_basket.checkDiscountCard();
    assert.equal(21.375, shopping_basket.totalCost)
  })

  it( "does not get discount if no discount card", function() {
    shopping_basket.discountCard = false;
    shopping_basket.add({name:"chocolate", price:5});
    shopping_basket.calculateTotalCost();
    shopping_basket.checkDiscountCard();
    assert.equal( 22.5, shopping_basket.totalCost)
  })



})