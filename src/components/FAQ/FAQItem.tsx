import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { FAQ } from '../../types/api';

interface FAQItemProps {
  faq: FAQ;
}

const FAQItem = ({ faq }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-orange-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-orange-600" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export default FAQItem;