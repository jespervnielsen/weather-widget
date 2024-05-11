// components/WeatherPanel.tsx
import React from 'react';

interface WeatherPanelProps {
  weatherData: {
    main: {
      temp: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
    name: string;
  } | null;
}

const WeatherPanel: React.FC<WeatherPanelProps> = ({ weatherData }) => {
	// console.log('weatherData:', weatherData);
  return (
    <div className="panel panel-info">
      <div className="panel-heading">
        Weather in <b>{weatherData ? weatherData.name : '...'}</b>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          Temperature: <b>{weatherData ? `${weatherData.main.temp}°C` : '...'}</b>
        </li>
        <li className="list-group-item">
          Humidity: <b>{weatherData ? `${weatherData.main.humidity}%` : '...'}</b>
        </li>
        <li className="list-group-item">
          Wind: <b>{weatherData ? `${weatherData.wind.speed} m/s` : '...'}</b>
        </li>
      </ul>
    </div>
  );
};

export default WeatherPanel;
