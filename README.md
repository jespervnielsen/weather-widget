# Weather Widget

## Overview

The **Weather Widget** is a Next.js-based web application designed to provide real-time weather information. It allows users to search and view current weather details such as temperature, humidity, and wind speed for different cities. This application is ideal for users who want a quick and up-to-date weather overview.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Docker** and **Docker Compose**: For containerization and easy deployment.
- **Node.js**: This project uses Node.js version **22**. Make sure this version is installed on your system.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. **Clone the repository:**

   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/weather-widget.git

2. **Navigate to the project directory:**

	```bash
	cd weather-widget

## Running the Application with Docker Compose
1. **Build and run the Docker container:**
To start the application using Docker Compose, follow these steps:
	```bash
	docker-compose -f docker/docker-compose.yml up --build

2. **Access the application:**
After the containers are up and running, you can access the Weather Widget at http://localhost:3000 from your web browser.

## Running Tests
To run the unit tests for the application, execute the following command in the project root:
	```bash
	npm run test



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

