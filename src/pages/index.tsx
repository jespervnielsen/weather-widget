import React from 'react';
import { GetServerSideProps } from 'next';
import WeatherWidget from '../components/WeatherWidget';
import { fetchWeather } from '../utils/fetchWeather';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const city = context.query.city || 'Copenhagen';
  const initialWeatherData = await fetchWeather(city);
  return { props: { initialWeatherData } };
};

const Home: React.FC<{ initialWeatherData: any }> = ({ initialWeatherData }) => {
	return <WeatherWidget initialWeatherData={initialWeatherData} />;
};

export default Home;
