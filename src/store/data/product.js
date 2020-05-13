export class ProductDetail {
  constructor(
    title,
    subtitle,
    description,
    price,
    image,
    size,
    colors,
    comments
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.price = price;
    this.image = image;
    this.size = size;
    this.colors = colors;
    this.comments = comments;
  }

  static pinkChair() {
    return new ProductDetail(
      "Iphone 8",
      "Apple",
      "iPhone 8 memperkenalkan desain kaca yang sepenuhnya baru. Kamera paling populer di dunia, kini lebih baik lagi. Chip yang paling andal dan cerdas di ponsel pintar. Pengisian daya nirkabel yang begitu mudah dilakukan. Dan pengalaman augmented reality yang tak pernah mungkin sebelumnya. iPhone 8.",
      "Rp. 7.000.000,00",
      require("../../../assets/products/image-product-1.jpg"),
      "5",
      [ProductColor.gray(), ProductColor.pink(), ProductColor.red()],
      [Comment.byTreido()]
    );
  }
}

export class ProductColor {
  constructor(value, description) {
    this.value = value;
    this.description = description;
  }

  static gray() {
    return new ProductColor("#c9c6c5", "gray");
  }

  static pink() {
    return new ProductColor("#FF708D", "pink");
  }

  static red() {
    return new ProductColor("#e01919", "red");
  }
}

export class Profile {
  constructor(firstName, lastName, photo) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.photo = photo;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // static TreidoLagi() {
  //   return new Profile(
  //     "Mark",
  //     "Volter",
  //     require("../../../assets/image-profile.png")
  //   );
  // }

  static Treido() {
    return new Profile(
      "Treido",
      "Ristivan",
      require("../../../assets/image-profile.png")
    );
  }
}

export class Like {
  constructor(author) {
    this.author = author;
  }

  // static byTreidoLagi() {
  //   return new Like(Profile.TreidoLagi());
  // }

  static byTreido() {
    return new Like(Profile.Treido());
  }
}

export class Comment {
  constructor(text, date, author, comments, likes) {
    this.text = text;
    this.date = date;
    this.author = author;
    this.comments = comments;
    this.likes = likes;
  }

  static byTreido() {
    return new Comment(
      "The Iphone has a good quality!",
      "Today 11:10 am",
      Profile.Treido(),
      [],
      []
      // [Comment.byTreidoLagi()],
      // [Like.byTreidoLagi()]
    );
  }

  // static byTreidoLagi() {
  //   return new Comment(
  //     "Yes! I agree with you",
  //     "Today 11:10 am",
  //     Profile.TreidoLagi(),
  //     [],
  //     []
  //   );
  // }
}
