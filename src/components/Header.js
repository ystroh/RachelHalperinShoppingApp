import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectItems } from '../features/cart/cartSlice';

function Header() {
  const items = useSelector(selectItems);
  const location = useLocation();

  return (
    <header className="py-4 bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Shopping App</h1>
      
      </div>
    </header>
  );
}

export default Header;