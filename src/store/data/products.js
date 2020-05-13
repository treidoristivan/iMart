export class Product {
  constructor(title, category, image, price, amount) {
    this.title = title;
    this.category = category;
    this.image = image;
    this.price = price;
    this.amount = amount;
  }

  get formattedPrice() {
    return `Rp. ${this.price} jt`;
  }

  get totalPrice() {
    return this.price * this.amount;
  }

  static pinkChair() {
    return new Product(
      "Iphone8",
      "Apple",
      require("../../../assets/products/image-product-1.jpg"),
      7,
      1
    );
  }

  static whiteChair() {
    return new Product(
      "Iphone 11",
      "Apple",
      require("../../../assets/products/image-product-2.jpg"),
      20,
      1
    );
  }

  static blackLamp() {
    return new Product(
      "Iphone 11 pro",
      "Apple",
      require("../../../assets/products/image-product-3.jpg"),
      25,
      1
    );
  }
}
