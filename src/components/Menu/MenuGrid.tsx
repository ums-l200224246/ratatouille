import React from 'react';
import MenuCard from './MenuCard';
import type { Menu } from '../../types/api';

interface MenuGridProps {
  menus: Menu[];
}

const MenuGrid = ({ menus }: MenuGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {menus.map((menu) => (
      <MenuCard key={menu.id} menu={menu} />
    ))}
  </div>
);

export default MenuGrid;