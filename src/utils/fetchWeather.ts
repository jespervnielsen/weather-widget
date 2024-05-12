/**
 * Fetches weather data for a given city from the OpenWeather API.
 * Uses caching via Next.js's revalidate option to reduce API usage.
 *
 * @param {string} city - The city name to fetch weather data for.
 * @returns {Promise<any>} - A promise that resolves to the weather data object.
 */
export const fetchWeather = async (city: string): Promise<any> => {
	const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
  	const response = await fetch(
    	`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
		{
			next: { revalidate: 600 }, // Cache response for 10 minutes
	  	}
  );
  return response.json();
};
