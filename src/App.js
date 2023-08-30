import { useState } from "react";
//import { WEATHER_API_URL, WEATHER_API_KEY } from "./geodbcities";
import { WEATHER_BIT_URL, WEATHER_BIT_API_KEY } from "./geodbcities";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
//import Forecast from "./components/forecast/Forecast";

import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData); //searchData should have this shape {value, label}

    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
     // `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
     `${WEATHER_BIT_URL}/current?key=${WEATHER_BIT_API_KEY}&lat=${lat}&lon=${lon}`
    );

    const forecastFetch = fetch(
     `${WEATHER_BIT_URL}/forecast/daily?key=${WEATHER_BIT_API_KEY}&lat=${lat}&lon=${lon}&days=6`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  //console.log(currentWeather);
  if (currentWeather === null){
    console.log('i am still null')
  }else{
    console.log(currentWeather.data[0].city_name)
    console.log(currentWeather.data[0].country_code)
    console.log(currentWeather.data[0].weather.description)
    console.log(currentWeather.data[0].weather.icon)
    console.log(currentWeather.data[0].temp)
    console.log(currentWeather.data[0].wind_spd)
    console.log(currentWeather.data[0].rh)
    console.log(currentWeather.data[0].pod)
    console.log(currentWeather.data[0].ob_time)
    console.log(forecast);
  }
 

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather currentweatherdata={currentWeather} />}
    </div>
  );
}

export default App;
