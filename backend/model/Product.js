class Product{
    constructor(name,price,overview,desc,color,brand,os,battery,material,mainImage,secondImage,boxImage){
        this.name = name;
        this.price = price;
        this.overview = overview;
        this.desc = desc;
        this.color = [...color];
        this.brand = brand;
        this.os = os;
        this.battery = battery;
        this.material = material;
        this.mainImage = mainImage;
        this.secondImage = [...secondImage];
        this.box = boxImage;
    }
}

module.exports = Product;