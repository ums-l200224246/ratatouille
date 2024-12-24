import React from 'react';
import type { OpeningHour } from '../../types/api';

interface OpeningHourCardProps {
  hour: OpeningHour;
}

const OpeningHourCard = ({ hour }: OpeningHourCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{hour.day}</h3>
    <p className="text-gray-600">
      {hour.opening_time} - {hour.closing_time}
    </p>
  </div>
);

export default OpeningHourCard;