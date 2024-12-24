import React, { useState } from 'react';
import { useMenus } from '../hooks/useMenus';
import { useCategories } from '../hooks/useCategories';
import CategoryFilter from '../components/Menu/CategoryFilter';
import MenuGrid from '../components/Menu/MenuGrid';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const Menu = () => {
  const { menus, loading: menuLoading, error: menuError } = useMenus();
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredMenus = selectedCategory === 'all' 
    ? menus 
    : menus?.filter(menu => menu.category === selectedCategory);

  if (menuLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (menuError) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        {menuError}
      </div>
    );
  }

  if (!Array.isArray(menus) || menus.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        No menu items available
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      
      {categories && (
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      )}

      {Array.isArray(filteredMenus) && filteredMenus.length > 0 ? (
        <MenuGrid menus={filteredMenus} />
      ) : (
        <div className="text-center text-gray-600">
          No items found in this category
        </div>
      )}
    </div>
  );
};

export default Menu;