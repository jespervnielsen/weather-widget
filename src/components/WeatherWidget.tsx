import React, { useEffect, useState } from 'react';
import WeatherPanel from './WeatherPanel';
import CitySearchForm from './CitySearchForm';
import { fetchWeather } from '../utils/fetchWeather';

const WeatherWidget: React.FC<{ initialWeatherData: any }> = ({ initialWeatherData }) => {
  const [weatherData, setWeatherData] = useState(initialWeatherData); // Corrected this line

  const handleCityChange = async (city: string) => {
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  return (
    <div className="widget">
      <WeatherPanel weatherData={weatherData} />
      <CitySearchForm onCityChange={handleCityChange} />
    </div>
  );
};

export default WeatherWidget;
