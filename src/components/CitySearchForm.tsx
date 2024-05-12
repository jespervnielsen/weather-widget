// components/CitySearchForm.tsx
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
	// Update the URL without refreshing the page
    // router.push(`/?city=${encodeURIComponent(lowercaseCity)}`, undefined, { shallow: true });
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
