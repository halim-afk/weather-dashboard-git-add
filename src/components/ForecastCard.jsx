function ForecastCard({ day }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <p className="font-bold">{day.dt_txt.split(" ")[0]}</p>
      <img
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt={day.weather[0].description}
        className="mx-auto"
      />
      <p>{day.weather[0].main}</p>
      <p>Temp: {day.main.temp}°C</p>
    </div>
  );
}

export default ForecastCard;
