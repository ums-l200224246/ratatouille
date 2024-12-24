import { useState, useEffect } from 'react';
import { getProfile } from '../services/api';
import type { RestaurantProfile } from '../types/api';

export const useProfile = () => {
  const [profile, setProfile] = useState<RestaurantProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfile(data[0]);
      } catch (err) {
        setError('Failed to load restaurant profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { profile, loading, error };
};