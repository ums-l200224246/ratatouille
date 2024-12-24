import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <UtensilsCrossed className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">Ratatoille</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-orange-600">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;