var shoppingBasket = {
  items: [],

  totalCost: 0,

  discountCard: false,

  add: function(item) { this.items.push(item)},
  
  remove: function(item) { 
    var index = this.items.indexOf(item);
    this.items.splice(index, 1) },
  
  calculateTotalCost: function() {
    for (i=0; i < this.items.length; i++) {
      this.totalCost += (this.items[i].price)
    }
    if (this.totalCost > 20) {
      this.totalCost -= (this.totalCost * 0.10)
    }
  },

  checkDiscountCard: function() {
    if (this.discountCard == true) {
      this.totalCost -= (this.totalCost * 0.05)
    }
  }

};

module.exports = shoppingBasket;