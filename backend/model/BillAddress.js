class BillAddress{
    constructor(name,email,phone,city,district,wards,address,detailAddress){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.district = district;
        this.wards = wards;
        this.address = address;
        this.detailAddress = detailAddress;
    }
}

module.exports = BillAddress;