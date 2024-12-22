
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white-200 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Furniro</h1>
      </div>
      <nav className="flex space-x-6">
        <a href="#home" className="hover:text-pink-500">Home</a>
        <a href="#shop" className="hover:text-pink-500">Shop</a>
        <a href="#blog" className="hover:text-pink-500">Blog</a>
        <a href="#contact" className="hover:text-pink-500">Contact</a>
      </nav>
      <div className="flex space-x-4">
        <button className="text-pink-500">🔍</button>
        <button className=""></button>
        <button className="text-dark-500">🛒</button>
      </div>
    </header>
  );
};

export default Header;



