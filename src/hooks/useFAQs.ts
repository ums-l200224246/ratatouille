import { useState, useEffect } from 'react';
import { getFAQs } from '../services/api';
import type { FAQ } from '../types/api';

export const useFAQs = () => {
  const [faqs, setFAQs] = useState<FAQ[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const data = await getFAQs();
        setFAQs(data);
      } catch (err) {
        setError('Failed to load FAQs');
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  return { faqs, loading, error };
};