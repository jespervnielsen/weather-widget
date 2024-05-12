// pages/api/weather.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchWeather } from '../../utils/fetchWeather';


// Define the expected query parameters
interface WeatherQuery extends NextApiRequest {
  query: {
    city: string;
  };
}

// Define the handler function
export default async function handler(req: WeatherQuery, res: NextApiResponse) {
  const { city } = req.query;

  if (!city) {
    res.status(400).json({ message: 'City query parameter is required.' });
    return;
  }

  try {
	const data = await fetchWeather(city)
	// console.log(data);
    res.status(200).json(data);
  } catch (error) {
    // Handle any unexpected errors
    res.status(500).json({ message: 'Internal server error.' });
  }
}
