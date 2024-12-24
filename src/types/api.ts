export interface Menu {
  id: number;
  category: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface RestaurantProfile {
  id: number;
  name: string;
  logo: string;
  about_us: string;
  address: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface OpeningHour {
  id: number;
  day: string;
  opening_time: string;
  closing_time: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}