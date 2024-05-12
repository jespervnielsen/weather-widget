// pages/index.tsx
/**
 * Main page that loads a weather widget.
 * Uses server-side props to fetch and pass initial weather data.
 *
 * @param {object} props - Component properties.
 * @param {any} props.initialWeatherData - Weather data to initially display.
 * @param {string | null} props.error - Error message, if any.
 * @returns {JSX.Element} The main page UI.
 */

import React from 'react';
import { GetServerSideProps } from 'next';
import WeatherWidget from '../components/WeatherWidget';
import { fetchWeather } from '../utils/fetchWeather';

import 'normalize.css';
import '../styles/globals.css';

export const getServerSideProps: GetServerSideProps = async (context) => {
	// Determine city from query parameter or use "Copenhagen" as default
  const city = (context.query.city as string) || 'Copenhagen';

  // Check if the city is provided and is not just an empty string
  if (!city || city.trim() === '') {
    return { props: { initialWeatherData: null, error: null } };
  }

  try {
    const weatherData = await fetchWeather(city);

	if (weatherData.cod === "404") {
      return { props: { initialWeatherData: null, error: "City not found. Please try another." } };
    }
    return { props: { initialWeatherData: weatherData, error: null } };
  } catch (error) {
    return { props: { initialWeatherData: null, error: "Error fetching weather data. Please try again." } };
  }
};

const Home: React.FC<{ initialWeatherData: any, error: string | null }> = ({ initialWeatherData, error }) => {
  return <WeatherWidget initialWeatherData={initialWeatherData} initialError={error} />;
};

export default Home;
