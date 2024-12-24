import React from 'react';
import type { Category } from '../../types/api';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => (
  <div className="flex justify-center mb-12 space-x-4 flex-wrap gap-y-2">
    <button
      onClick={() => onSelectCategory('all')}
      className={`px-4 py-2 rounded-full ${
        selectedCategory === 'all' 
          ? 'bg-orange-600 text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      All
    </button>
    {categories?.map((category) => (
      <button
        key={category.id}
        onClick={() => onSelectCategory(category.name)}
        className={`px-4 py-2 rounded-full ${
          selectedCategory === category.name 
            ? 'bg-orange-600 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {category.name}
      </button>
    ))}
  </div>
);

export default CategoryFilter;