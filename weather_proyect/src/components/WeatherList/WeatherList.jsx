//import.meta.env.VITE_SOME_VALUE
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './WeatherList.css'; 

import Card from './WeatherCard';

const apiKey = import.meta.env.VITE_API_KEY;

const WeatherList = () => {
  const [city,setCity]= useState("Madrid"); // Madrid aparece por defecto.
  const [weatherData, setWeatherData] = useState([]);
 

  useEffect(() => {
  const getWeather = async () => {
    try {
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=es&appid=${apiKey}&units=metric`);
      const data = await resp.json();

      // Control de errores de la API
      if (!resp.ok) {
        throw new Error(data.message || 'Error al obtener el clima');
      }

      setWeatherData(data.list);
      console.log(`Datos del clima actualizados para ${city}`);
    } catch (error) {
      console.error('Error al obtener datos del clima:', error.message);
      setWeatherData([]); // O maneja el error como necesites
    }
  };

  getWeather();
}, [city]);


    const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.city.value)
    setCity(e.target.city.value) // Modificando el estado de Value
  };
    const renderWeather = () => weatherData.map((weather,i) => <Card key={uuidv4()} data={weather} />);

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <input name="city" />
        <button>Buscar</button>
      </form>
      <h1>{city}</h1>
    </div>
      <section>
        {renderWeather()
      }</section>

    </>
)};

export default WeatherList;
