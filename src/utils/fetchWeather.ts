const API_KEY = '8e4b29f425b574e6f7cf4805ced4daee';

export const fetchWeather = async (city: string): Promise<any> => {
	const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
  	const response = await fetch(
    	`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
		{
			next: { revalidate: 600 },
	  	}
  );
  return response.json();
};
