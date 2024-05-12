import React from 'react';
import { GetServerSideProps } from 'next';
import WeatherWidget from '../components/WeatherWidget';
import { fetchWeather } from '../utils/fetchWeather';

import 'normalize.css';
import '../styles/globals.css';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const city = (context.query.city as string) || 'Copenhagen';  // Capture city or copenhagen as default
// console.log('city:', city);
  // Check if the city is provided and is not just an empty string
  if (!city || city.trim() === '') {
    return { props: { initialWeatherData: null, error: null } };
  }

  try {
    const weatherData = await fetchWeather(city);
	// console.log('weatherData:', weatherData);
    if (weatherData.cod === "404") {
      return { props: { initialWeatherData: null, error: "City not found. Please try another." } };
    }
    return { props: { initialWeatherData: weatherData, error: null } };
  } catch (error) {
	console.log('error:', error);
    return { props: { initialWeatherData: null, error: "Error fetching weather data. Please try again." } };
  }
};

const Home: React.FC<{ initialWeatherData: any, error: string | null }> = ({ initialWeatherData, error }) => {
  return <WeatherWidget initialWeatherData={initialWeatherData} initialError={error} />;
};

export default Home;
