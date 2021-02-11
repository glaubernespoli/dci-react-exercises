import './App.css';
import WeatherCard from './display/WeatherCard/WeatherCard';
import React, { useState, useEffect } from 'react'
import placesAPIService from '../service/PlacesAPIService';
import openWeatherMapService from '../service/OpenWeatherMapAPIService';

const App = () => {
  //location represents the selected value from the react-places-autocomplete
  const [location, updateLocation] = useState();

  const [forecast, setForecast] = useState();

  //updates location once it's selected
  const handleSelect = (latLong) =>
    placesAPIService.setSelectedLocation(latLong, updateLocation);

  useEffect(() => {
    placesAPIService.getCurrentLocation(updateLocation);
  }, []);

  useEffect(() => {
    openWeatherMapService.requestForecast(location, setForecast)
  }, [location]);

  return <WeatherCard forecast={forecast} handleSelect={handleSelect} />;
};

export default App;
