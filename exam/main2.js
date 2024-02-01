//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:       Name:

class Product {	
    constructor(name,description,price, quantity) {
        this.name = name
        this.description=description;
        this.price=price;
        this.quantity=quantity;
    }
// Insert your code here

    getTotalPrice() {
    if(this.price === undefined || this.price === null) {
        return undefined;
    }
    if(this.quantity === undefined || this.quantity === null) {
        return undefined;
    }
    return this.price * this.quantity
}
}


let product1 = new Product("Apple iPhone 15 pro max 1 tb", "Latest model of iPhone with advanced features", 1000, 50);
let product2 = new Product("Samsung Galaxy S24 Ultra 1 tb", "High-end Android smartphone", 800, 75);
let product3 = new Product("Sony Headphones", "Noise-cancelling over-ear headphones", 200, 150);
let product4 = new Product("Asus Gaming Laptop", "High-performance gaming laptop with latest GPU", 2000, 30);

// Insert your code about using object product by all Methods here
console.log(Product.getTotalPrice());

