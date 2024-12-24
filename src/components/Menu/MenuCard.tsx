import React from 'react';
import type { Menu } from '../../types/api';

interface MenuCardProps {
  menu: Menu;
}

const MenuCard = ({ menu }: MenuCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img 
      src={menu.image} 
      alt={menu.name} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{menu.name}</h3>
      <p className="text-gray-600 mb-4">{menu.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-orange-600 font-bold">${menu.price.toFixed(2)}</span>
        <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors">
          Order Now
        </button>
      </div>
    </div>
  </div>
)

export default MenuCard;