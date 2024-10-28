// src/components/Navbar.js
import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-green-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">React Store</h1>
      <button onClick={onCartClick} className="relative">
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
