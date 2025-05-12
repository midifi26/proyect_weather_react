import.meta.env.VITE_SOME_VALUE
import React, { useEffect, useState } from 'react';
import './WeatherList.css'; 

import Card from './WeatherCard';

const apiKey = import.meta.env.VITE_API_KEY;

const WeatherList = () => {
  const [city,setCity]= useState("Madrid"); // Madrid aparece por defecto.
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [icon,setIcon]= useState('');

  useEffect(() => {
        const getWeather = async () =>{
            const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=es&appid=${apiKey}&units=metric`);
            const data = await resp.json();
            setWeatherData(data.list);
            setCityName(data.city);
        }
        getWeather();
    }, [city]);

    const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.city.value)
    setCity(e.target.city.value) // Modificando el estado de Value
  };
    const renderWeather = () => weatherData.map((weather,i) => <Card key={i} data={weather} />);

  return (
    <>
    <div className="weather-form-container">
      <form onSubmit={handleSubmit}>
        <input name="city" />
        <button>Buscar</button>
      </form>
      <h1>{cityName.name}</h1>
    </div>
      <section className="weather-list">
        {renderWeather()
      }</section>;

    </>
)};

export default WeatherList;
