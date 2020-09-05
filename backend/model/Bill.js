class Bill{
    constructor(billAddress,order,payment,uid){
        this.billAddress = billAddress;
        this.order = order;
        this.payment = payment;
        this.uid = uid;
        this.numberTime = new Date().getTime();
        this.status = false;
    }
}

module.exports = Bill;