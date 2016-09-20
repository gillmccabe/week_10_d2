var bottle = require( '../water_bottle');
var assert = require( 'assert' );

describe( 'Water Bottle', function() {

  beforeEach( function() {
    bottle.fill();
  })

  it( "should start full", function() {
    assert.equal( 100, bottle.volume )
  })

  it( "can be emptied", function() {
    bottle.empty();
    assert.equal( 0, bottle.volume )
  })

  it( "can be filled", function() {
    bottle.empty();
    bottle.fill();
    assert.equal( 100, bottle.volume )
  })

  it( "can take drink", function() {
    bottle.drink();
    assert.equal( 90, bottle.volume )
  })


  it( "can not go below zero", function() {
    bottle.empty()
    bottle.drink();
    assert.equal( 0 , bottle.volume )
  })

})