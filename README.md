# Weather Widget

## Overview

The **Weather Widget** is a [Next.js-based](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) web application designed to provide near real-time weather information.


## Prerequisites

Before you begin, ensure you have the following installed:
- **Docker** and **Docker Compose**: For containerization
- **Node.js**: This project uses Node.js version **22**. Make sure this version is installed on your system, if you want to run directly without docker

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. **Clone the repository:**

   Clone this repository to your local machine using the following command:

   ```bash
	git clone https://github.com/your-username/weather-widget.git
	```

2. **Navigate to the project directory:**

	```bash
	cd weather-widget
	```

## Configuration

### API Key

The Weather Widget uses the OpenWeatherMap API to fetch weather data. To run this project, you'll need an API key from OpenWeatherMap:

1. Visit [OpenWeatherMap](https://openweathermap.org/api) and sign up for an account.
2. Follow the instructions to subscribe to an API plan that suits your needs (the free plan usually suffices for development purposes).
3. Once you have your API key, create a file named `.env.local` in the root directory of this project.
4. Add your API key to this file like so:

   ```plaintext
   OPEN_WEATHER_MAP_API_KEY=your_api_key_here
   ```

## Running the Application with Docker Compose
1. **Build and run the Docker container:**
To start the application using Docker Compose, follow these steps:
	```bash
	docker-compose -f docker/docker-compose.yml up --build
	```

2. **Access the application:**
After the containers are up and running, you can access the Weather Widget at http://localhost:3000 from your web browser.


## Running the application with NPM

```bash
# start development server
npm run dev
# Build for production
npm run build
# start production server
npm run start
```

you can access the Weather Widget at http://localhost:3000 from your web browser.

## Running Tests
To run the unit tests for the application, execute the following command in the project root:
```bash
npm run test
```

## Notes
- The basic functionality of the widget, works without having javascript enabled in the browser. But when running development mode, the styles wont be injected, unless javascript is enabled.

## Roadmap
- Typeahead search on city search
- Ask the user to "use my city" using the geolocation API in browser
- Setup Commit Linting
- Setup deployments
- Setup linting in pipelines