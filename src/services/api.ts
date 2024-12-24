import axios from 'axios';
import type { Menu, Category, RestaurantProfile, OpeningHour, FAQ } from '../types/api';

const API_BASE_URL = 'https://dryan01.pythonanywhere.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getMenus = async (): Promise<Menu[]> => {
  try {
    const response = await api.get('/menus/');
    return response.data;
  } catch (error) {
    console.error('Error fetching menus:', error);
    throw new Error('Failed to fetch menus');
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get('/menus/categories/');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
};

export const getProfile = async (): Promise<RestaurantProfile[]> => {
  try {
    const response = await api.get('/profile/');
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw new Error('Failed to fetch restaurant profile');
  }
};

export const getOpeningHours = async (): Promise<OpeningHour[]> => {
  try {
    const response = await api.get('/opening-hour/');
    return response.data;
  } catch (error) {
    console.error('Error fetching opening hours:', error);
    throw new Error('Failed to fetch opening hours');
  }
};

export const getFAQs = async (): Promise<FAQ[]> => {
  try {
    const response = await api.get('/faq/');
    return response.data;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw new Error('Failed to fetch FAQs');
  }
};