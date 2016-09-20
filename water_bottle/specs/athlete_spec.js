var athlete = require( '../athlete');
var bottle = require( '../water_bottle');
var assert = require( 'assert' );

describe( 'Athlete', function() {

  beforeEach( function() {
    athlete.hydration = 100,
    athlete.distanceCovered = 0,
    bottle.volume = 40
  })

  it( "athlete starts with a hydration of 100", function() {
    assert.equal( 100, athlete.hydration )
  })

  it( "athlete starts with a distanceCovered of 0", function () {
    assert.equal( 0, athlete.distanceCovered )
  })

  it ( "hydration changes when athlete runs", function () {
    athlete.run();
    assert.equal( 80, athlete.hydration )
  })

  it( "distanceCovered changes when athlete runs", function () {
    athlete.run();
    assert.equal( 10, athlete.distanceCovered )
  })

  it( "distanceCovered doesn't change when athlete hydration is 0", function () {
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    assert.equal( 50, athlete.distanceCovered )
  })

  it ( "hydration does not go below 0", function() {
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.run();
    assert.equal( 0, athlete.hydration )
  })

  it ( "can increase hydration by drinking", function() {
    athlete.run();
    athlete.run();
    athlete.run();
    athlete.drink();
    assert.equal( 60, athlete.hydration )
  })

})