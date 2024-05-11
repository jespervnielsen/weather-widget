// components/CitySearchForm.tsx
import React, { useState } from 'react';

interface CitySearchFormProps {
  onCityChange: (city: string) => void;
}

const CitySearchForm: React.FC<CitySearchFormProps> = ({ onCityChange }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCityChange(city);
  };

  return (
    <form method="GET" onSubmit={handleSubmit}>
      <input name="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter a city" />
      <button type="submit">Search</button>
    </form>
  );
};

export default CitySearchForm;
