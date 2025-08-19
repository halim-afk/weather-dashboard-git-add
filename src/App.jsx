import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // State to hold weather data
  const [weatherData, setWeatherData] = useState(null);
  // State to hold search query
  const [city, setCity] = useState("");
  // State to handle errors
  const [error, setError] = useState("");

  // Fetch weather data from OpenWeatherMap API
  const fetchWeather = async (cityName) => {
    try {
      setError(""); // Reset previous errors
      const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        setError(data.message); // Handle invalid city names
        setWeatherData(null);
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }
  };

  // Handle form submission from SearchBar
  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

  // Auto-refresh every 10 minutes
  useEffect(() => {
    if (city) {
      const interval = setInterval(() => {
        fetchWeather(city);
      }, 600000); // 600000 ms = 10 minutes
      return () => clearInterval(interval);
    }
  }, [city]);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
