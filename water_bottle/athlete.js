var bottle = require( './water_bottle');

var athlete = {
  hydration: 100,
  distanceCovered: 0,
  run: function() {
    if (this.hydration >= 20) {
    this.hydration -= 20;
    this.distanceCovered += 10; 
    } else {
      this.hydration = 0;
    }
  },
  drink: function() {
    if (bottle.volume >= 20) {
    this.hydration += 20;
    bottle.volume -= 20;
    } 
  }
}

  

module.exports = athlete;