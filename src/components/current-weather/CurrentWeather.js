import "./currentweather.css";

const CurrentWeather = ({ currentweatherdata }) => {

    const ARRAY_OF_DAYS =['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const ARRAY_OF_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
                        'November', 'December'];

let datetime = currentweatherdata.data[0].ob_time
let arrDateTime = datetime.split(" ");
let arrDate = arrDateTime[0];
let day = ARRAY_OF_DAYS[new Date(arrDate).getDay()];
let month =ARRAY_OF_MONTHS[new Date(arrDate).getMonth()] ;
let number_of_month = new Date(arrDate).getDate();
let date =`${day}, ${month} ${number_of_month}`;
  return (
    <>
      <div className="current-weather-card">
         <h2 className="today">Today</h2>
        <div className="inner-container">
          <div className="left-column">
            <span className="city">
            {currentweatherdata.data[0].city_name},{" "}
            {currentweatherdata.data[0].country_code}{" "}
            </span>
            <div>
              {date}
            </div>
            <div>
                {currentweatherdata.data[0].weather.description}
            </div>
            <span>
                <img alt="Weather Icon"
                     className="weather-icon"
                     src= {`icons/${currentweatherdata.data[0].weather.icon}.png`}
                /> 
             
            </span>
          </div>
          <div className="right-column">
            <div className="temp">
             {currentweatherdata.data[0].temp} &deg;C
            </div>
            <div className="">
             Humidity:  {currentweatherdata.data[0].rh} %
            </div>
            <div className="">
             Wind speed:  {currentweatherdata.data[0].wind_spd} m/s
            </div>
            <div className="">
             Pressure:  {currentweatherdata.data[0].pres} mb
            </div>
            <div className="">
             Sunrise:  {currentweatherdata.data[0].sunrise} AM
            </div>
            <div className="">
             Sunset:  {currentweatherdata.data[0].sunset} PM
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
