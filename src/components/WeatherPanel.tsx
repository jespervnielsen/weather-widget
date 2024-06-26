// components/WeatherPanel.tsx
/**
 * Displays a weather information panel for a given location, including temperature,
 * humidity, and wind speed/direction.
 *
 * @param {object} props - Component properties.
 * @param {object | null} props.weatherData - Weather data or `null` if unavailable.
 * @returns {JSX.Element} A panel showing weather details.
 */
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

  // Converts wind direction in degrees to a cardinal direction.
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
          Temperature: <b>{weatherData?.main?.temp ? `${Math.round(weatherData.main.temp)}°C` : '...'}</b>
        </li>
        <li className={styles.listItem}>
          Humidity: <b>{weatherData?.main?.humidity ? `${weatherData.main.humidity}%` : '...'}</b>
        </li>
        <li className={styles.listItem}>
          Wind: <b>{(weatherData?.wind?.speed && weatherData?.wind?.deg ) ? `${Math.round(weatherData.wind.speed )} m/s ${getWindDirection(weatherData.wind.deg)}` : '...'}</b>
        </li>
      </ul>
    </div>
  );
};

export default WeatherPanel;
