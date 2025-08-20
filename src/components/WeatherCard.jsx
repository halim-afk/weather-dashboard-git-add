function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div className="bg-white p-6 rounded shadow-md w-80 text-center mb-4">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
        className="mx-auto"
      />
      <p className="text-lg">{weather[0].main}</p>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} km/h</p>
    </div>
  );
}

export default WeatherCard;
