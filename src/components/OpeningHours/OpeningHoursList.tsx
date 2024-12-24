import React from 'react';
import OpeningHourCard from './OpeningHourCard';
import type { OpeningHour } from '../../types/api';

interface OpeningHoursListProps {
  hours: OpeningHour[];
}

const OpeningHoursList = ({ hours }: OpeningHoursListProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {hours.map((hour) => (
      <OpeningHourCard key={hour.id} hour={hour} />
    ))}
  </div>
);

export default OpeningHoursList;