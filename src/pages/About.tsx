import React from 'react';
import { useProfile } from '../hooks/useProfile';
import { MapPin, Phone, Mail } from 'lucide-react';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const About = () => {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        {error}
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        Restaurant information not available
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-8">{profile.about_us}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Restaurant interior"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Restaurant kitchen"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-orange-600" />
              <span className="text-gray-600">{profile.address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-orange-600" />
              <span className="text-gray-600">{profile.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-orange-600" />
              <span className="text-gray-600">{profile.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;