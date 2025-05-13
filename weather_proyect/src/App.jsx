import React from "react";
import './App.css';
import WeatherList from './components/WeatherList'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="app-container">
      <h1>Weather Info</h1>
      <WeatherList />
    </div>
  );
}

export default App;
