const products = [
  {
    id: 1,
    name: "Minimalist Wooden Chair",
    price: 2499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1591935893481-4a5fa6671ec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29vZGVuJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D",
    category: "Furniture",
  },
  {
    id: 2,
    name: "Vintage Leather Bag",
    price: 3499,
    rating: 4.8,
    image:
      "https://plus.unsplash.com/premium_photo-1664392214882-7cecd0a67ccd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmludGFnZSUyMGJhZ3N8ZW58MHx8MHx8fDA%3D",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Smart Bluetooth Watch",
    price: 4999,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1637819932930-eefe760a029f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJsdWV0b290aCUyMHdhdGNofGVufDB8fDB8fHww",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Noise Cancelling Headphones",
    price: 6999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Minimalist Wooden Chair",
    price: 2499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1591935893481-4a5fa6671ec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29vZGVuJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D",
    category: "Furniture",
  },
  {
    id: 6,
    name: "Vintage Leather Bag",
    price: 3499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1711113456820-639918258722?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFZpbnRhZ2UlMjBsZWF0aGVyJTIwYmFnfGVufDB8fDB8fHww",
    category: "Accessories",
  },
  {
    id: 7,
    name: "Smart Bluetooth Watch",
    price: 4999,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1637819932930-eefe760a029f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJsdWV0b290aCUyMHdhdGNofGVufDB8fDB8fHww",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Noise Cancelling Headphones",
    price: 6999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 9,
    name: "Minimalist Wooden Chair",
    price: 2499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1591935893481-4a5fa6671ec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29vZGVuJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D",
    category: "Furniture",
  },
  {
    id: 10,
    name: "Vintage Leather Bag",
    price: 3499,
    rating: 4.8,
    image:
      "https://plus.unsplash.com/premium_photo-1664392214882-7cecd0a67ccd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmludGFnZSUyMGJhZ3N8ZW58MHx8MHx8fDA%3D",
    category: "Accessories",
  },
  {
    id: 11,
    name: "Smart Bluetooth Watch",
    price: 4999,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1637819932930-eefe760a029f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJsdWV0b290aCUyMHdhdGNofGVufDB8fDB8fHww",
    category: "Electronics",
  },
  {
    id: 12,
    name: "Noise Cancelling Headphones",
    price: 6999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 13,
    name: "Minimalist Wooden Chair",
    price: 2499,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1591935893481-4a5fa6671ec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29vZGVuJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D",
    category: "Furniture",
  },
  {
    id: 14,
    name: "Vintage Leather Bag",
    price: 3499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1711113456820-639918258722?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFZpbnRhZ2UlMjBsZWF0aGVyJTIwYmFnfGVufDB8fDB8fHww",
    category: "Accessories",
  },
  {
    id: 15,
    name: "Smart Bluetooth Watch",
    price: 4999,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1637819932930-eefe760a029f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJsdWV0b290aCUyMHdhdGNofGVufDB8fDB8fHww",
    category: "Electronics",
  },
  {
    id: 16,
    name: "Noise Cancelling Headphones",
    price: 6999,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
];

export default products;
