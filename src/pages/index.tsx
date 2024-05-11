// pages/index.tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import WeatherWidget from '../components/WeatherWidget';
import { fetchWeather } from '../utils/fetchWeather';



export const getServerSideProps: GetServerSideProps = async (context) => {
  const city = context.query.city || 'Copenhagen';
//   console.log('city:', city);
  const weatherData = await fetchWeather(city);
//   console.log('weatherData:', weatherData);
  return { props: { weatherData } };
};

const Home: React.FC<{ weatherData: any }> = ({ weatherData }) => {
	// console.log('weatherData:', weatherData);
	return <WeatherWidget weatherData={weatherData} />;
  };

export default Home;
