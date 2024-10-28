// src/App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Add product to the cart
  const addToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  // Remove product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartCount={cart.length} onCartClick={() => setIsModalOpen(true)} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {isModalOpen && (
        <Modal cart={cart} onClose={() => setIsModalOpen(false)} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

export default App;
