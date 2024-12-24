import { useState, useEffect } from 'react';
import { getMenus } from '../services/api';
import type { Menu } from '../types/api';

export const useMenus = () => {
  const [menus, setMenus] = useState<Menu[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const data = await getMenus();
        setMenus(data);
      } catch (err) {
        setError('Failed to load menus');
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  return { menus, loading, error };
};