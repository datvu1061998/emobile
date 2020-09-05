class Order {
    constructor(cart,ship,subtotal,total){
        this.cart = cart;
        this.ship =ship;
        this.subtotal = subtotal;
        this.total = total;
    }
}

module.exports = Order;