import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { useProfile } from '../hooks/useProfile';

const Footer = () => {
  const { profile } = useProfile();

  if (!profile) return null;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>{profile.address}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href={profile.facebook} className="hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={profile.instagram} className="hover:text-orange-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={profile.twitter} className="hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">About Ratatoille</h3>
            <p className="text-gray-400">{profile.about_us}</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Ratatoille. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;