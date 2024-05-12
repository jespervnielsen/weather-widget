// components/WeatherPanel.tsx
import React from 'react';
import styles from '../styles/WeatherPanel.module.css';

interface WeatherPanelProps {
  weatherData: {
    main: {
      temp: number;
      humidity: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    name: string;
  } | null;
}

const WeatherPanel: React.FC<WeatherPanelProps> = ({ weatherData }) => {
	console.log('weatherData:', weatherData);

  const getWindDirection = (degrees: number) => {
    const directions = ['North', 'North East', 'East', 'South East', 'South', 'South West', 'West', 'North West'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  return (
    <div className={`${styles.panel} ${styles.panelInfo}`}>
      <div className={styles.title}>
        Weather in <b>{weatherData ? weatherData.name : '...'}</b>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Temperature: <b>{weatherData ? `${Math.round(weatherData.main.temp)}°C` : '...'}</b>
        </li>
        <li className={styles.listItem}>
          Humidity: <b>{weatherData ? `${weatherData.main.humidity}%` : '...'}</b>
        </li>
        <li className={styles.listItem}>
          Wind: <b>{weatherData ? `${Math.round(weatherData.wind.speed )} m/s ${getWindDirection(weatherData.wind.deg)}` : '...'}</b>
        </li>
      </ul>
    </div>
  );
};

export default WeatherPanel;
