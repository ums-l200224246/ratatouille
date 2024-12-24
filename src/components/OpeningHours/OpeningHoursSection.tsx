import React from 'react';
import { Clock } from 'lucide-react';
import { useOpeningHours } from '../../hooks/useOpeningHours';
import OpeningHoursList from './OpeningHoursList';
import LoadingSpinner from '../ui/LoadingSpinner';

const OpeningHoursSection = () => {
  const { openingHours, loading, error } = useOpeningHours();

  const renderContent = () => {
    if (loading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return (
        <div className="text-center text-red-600">
          {error}
        </div>
      );
    }

    if (!Array.isArray(openingHours) || openingHours.length === 0) {
      return (
        <div className="text-center text-gray-600">
          No opening hours available
        </div>
      );
    }

    return <OpeningHoursList hours={openingHours} />;
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Clock className="h-12 w-12 mx-auto text-orange-600 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Opening Hours</h2>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default OpeningHoursSection;