const API_KEY = '8e4b29f425b574e6f7cf4805ced4daee';

export const fetchWeather = async (city: string): Promise<any> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
	{
		next: { revalidate: 600 },
	  }
  );
  return response.json();
};
