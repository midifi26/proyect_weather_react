import React from "react";
import './WeatherCard.css';

const WeatherCard = ({data}) => {

  const {dt, weather, main, name} =  data;
  const {description} = weather[0];
  const time = new Date(dt * 1000).toLocaleTimeString('es-ES', {
  hour: '2-digit',
  minute: '2-digit'
});

  return (
    <article className="weather-card">
      <h4>Descripción: {description}</h4>
      <h4>Temperatura: {main.temp.toFixed(0)}ºC</h4>
      <h4>Hora: {time}</h4>
      <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="icono clima" />

    </article>);
};

export default WeatherCard;
