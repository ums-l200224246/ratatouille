import { useState, useEffect } from 'react';
import { getOpeningHours } from '../services/api';
import type { OpeningHour } from '../types/api';

export const useOpeningHours = () => {
  const [openingHours, setOpeningHours] = useState<OpeningHour[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOpeningHours = async () => {
      try {
        const data = await getOpeningHours();
        setOpeningHours(data);
      } catch (err) {
        setError('Failed to load opening hours');
      } finally {
        setLoading(false);
      }
    };

    fetchOpeningHours();
  }, []);

  return { openingHours, loading, error };
};