// components/CitySearchForm.tsx
/**
 * CitySearchForm Component
 *
 * This component allows users to input a city name and trigger a callback to fetch weather data for that city.
 * It also updates the query parameter in the URL with the entered city name.
 *
 * @param {object} props - Props passed to the component.
 * @param {(city: string) => void} props.onCityChange - Callback triggered on city change submission.
 *
 * @returns JSX.Element representing a form for city search.
 */

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/CitySearchForm.module.css';


interface CitySearchFormProps {
  onCityChange: (city: string) => void;
}

const CitySearchForm: React.FC<CitySearchFormProps> = ({ onCityChange }) => {
  const [city, setCity] = useState('');
  const router = useRouter(); // Use the useRouter hook

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
	const lowercaseCity = city.toLowerCase();
    onCityChange(lowercaseCity);
	router.push({
		pathname: '/',
		query: { city: lowercaseCity },
	  })
  };

  return (
    <form className={styles.citySearchForm} method="GET" onSubmit={handleSubmit} role="form">
      <input className={styles.inputCity} name="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter a city" />
      <button className={styles.submitSearch} type="submit">Search</button>
    </form>
  );
};

export default CitySearchForm;
