import React from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600" />
  </div>
);

export default LoadingSpinner;