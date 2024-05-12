import React, { useState } from 'react';
import WeatherPanel from './WeatherPanel';
import CitySearchForm from './CitySearchForm';
import { fetchWeather } from '../utils/fetchWeather';
import styles from '../styles/WeatherWidget.module.css';

interface WeatherWidgetProps {
	initialWeatherData: any;
	initialError?: string | null;
  }

  const WeatherWidget: React.FC<WeatherWidgetProps> = ({
	initialWeatherData,
	initialError = null // Default to null if undefined
  }) => {
	const [weatherData, setWeatherData] = useState(initialWeatherData);
	const [error, setError] = useState<string | null>(initialError); // Guaranteed to be string or null


  const handleCityChange = async (city: string) => {
    try {
      const data = await fetchWeather(city);
      if (data.cod === "404") {
        setError("City not found. Please try another.");
        setWeatherData(null);
      } else {
        setError(null);
        setWeatherData(data);
      }
    } catch (err) {
      setError("Error fetching weather data. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div className={styles.widget}>
      {error && <div className={styles.error}>{error}</div>}
      <WeatherPanel weatherData={weatherData} />
      <CitySearchForm onCityChange={handleCityChange} />
    </div>
  );
};

export default WeatherWidget;
