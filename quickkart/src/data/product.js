export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation.",
    image: "data:image/avif;base64,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"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    category: "Electronics",
    description: "Track your fitness and stay connected.",
    image: "https://source.unsplash.com/600x400/?smartwatch"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 79.99,
    category: "Fashion",
    description: "Comfortable and lightweight running shoes.",
    image: "https://source.unsplash.com/600x400/?running-shoes"
  },
  {
    id: 4,
    name: "Backpack",
    price: 49.99,
    category: "Accessories",
    description: "Durable backpack for everyday use.",
    image: "https://source.unsplash.com/600x400/?backpack"
  }
];