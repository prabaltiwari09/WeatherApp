# Weather App

This is a simple weather application that fetches weather data from an API and displays it to the user. It provides current weather information such as temperature, humidity, wind speed, and weather conditions for a given location.

## Features

- Get current weather data for a specified location
- Display temperature in Celsius or Fahrenheit
- Display weather conditions (e.g., sunny, cloudy, rainy)
- Show additional information like humidity and wind speed
- Automatically detect user's location (optional)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:

   ```
   cd weather-app
   ```

3. Install dependencies:

   ```
   npm install
   ```

## Usage

1. Obtain an API key

   To use this application, you need to obtain an API key from a weather data provider. This app supports various weather APIs such as OpenWeatherMap, Weatherbit, and AccuWeather. Sign up on their websites to get an API key.

2. Set up the API key

   Open the `config.js` file in the project's root directory and replace `'YOUR_API_KEY'` with your actual API key.

3. Start the application

   ```
   npm start
   ```

4. Open the application in your browser

   Open your preferred web browser and go to `http://localhost:3000` to see the Weather App in action.

## Configuration

The `config.js` file contains configuration options for the application:

- `API_KEY`: Your weather API key. Replace `'YOUR_API_KEY'` with your actual API key.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js

## API Used

This application uses a weather API to fetch weather data. The API used can be configured in the `config.js` file.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).