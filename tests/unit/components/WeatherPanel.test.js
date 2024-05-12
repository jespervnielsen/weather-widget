// tests/WeatherPanel.test.js
import React from 'react';
import {describe, expect, test} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import WeatherPanel from '../../../src/components/WeatherPanel';

const checkTextContent = (text) => {
	return (_, element) => element.textContent === text;
  };

describe('WeatherPanel', () => {
  it('renders weather information correctly', () => {
    const mockWeatherData = {
      main: {
        temp: 23,
        humidity: 50
      },
      wind: {
        speed: 5,
        deg: 90
      },
      name: 'Copenhagen'
    };



    render(<WeatherPanel weatherData={mockWeatherData} />);

    // Check if the weather information is rendered correctly
    expect(screen.getByText('Weather in')).toBeInTheDocument();
    expect(screen.getByText('Copenhagen')).toBeInTheDocument();
    expect(screen.getByText('Temperature:')).toBeInTheDocument();
    expect(screen.getByText('23°C')).toBeInTheDocument();
    expect(screen.getByText('Humidity:')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText(checkTextContent('Wind: 5 m/s East'))).toBeInTheDocument();
  });

  it('shows placeholders when no data is available', () => {
	render(<WeatherPanel weatherData={null} />);



	expect(screen.getByText(checkTextContent('Weather in ...'))).toBeInTheDocument();
	expect(screen.getByText(checkTextContent('Temperature: ...'))).toBeInTheDocument();
	expect(screen.getByText(checkTextContent('Humidity: ...'))).toBeInTheDocument();
	expect(screen.getByText(checkTextContent('Wind: ...'))).toBeInTheDocument();
  });
});