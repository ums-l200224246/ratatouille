import React from 'react';
import { Link } from 'react-router-dom';
import OpeningHoursSection from '../components/OpeningHours/OpeningHoursSection';
import FAQSection from '../components/FAQ/FAQSection';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Ratatoille</h1>
            <p className="text-xl md:text-2xl mb-8">Experience the finest French cuisine</p>
            <Link 
              to="/menu" 
              className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </div>

      <OpeningHoursSection />
      <FAQSection />
    </div>
  );
}

export default Home;