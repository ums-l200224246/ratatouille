import React from 'react';
import { HelpCircle } from 'lucide-react';
import { useFAQs } from '../../hooks/useFAQs';
import FAQList from './FAQList';
import LoadingSpinner from '../ui/LoadingSpinner';

const FAQSection = () => {
  const { faqs, loading, error } = useFAQs();

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

    if (!Array.isArray(faqs) || faqs.length === 0) {
      return (
        <div className="text-center text-gray-600">
          No FAQs available
        </div>
      );
    }

    return <FAQList faqs={faqs} />;
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 mx-auto text-orange-600 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default FAQSection;