import React from 'react';
import FAQItem from './FAQItem';
import type { FAQ } from '../../types/api';

interface FAQListProps {
  faqs: FAQ[];
}

const FAQList = ({ faqs }: FAQListProps) => (
  <div className="space-y-2">
    {faqs.map((faq) => (
      <FAQItem key={faq.id} faq={faq} />
    ))}
  </div>
);

export default FAQList;