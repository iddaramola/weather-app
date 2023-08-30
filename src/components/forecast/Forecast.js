import './forecast.css'

const Forecast = ({forecastdata})=>{

     let forecast_5_days = forecastdata.data.slice(1);
     const ARRAY_OF_DAYS =['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     const ARRAY_OF_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
                         'November', 'December'];
 
 //let datetime = forecastdata.data[0].valid_date
// let arrDateTime = datetime.split(" ");
 //let arrDate = arrDateTime[0];
 //let day = ARRAY_OF_DAYS[new Date(arrDate).getDay()];
 //let month =ARRAY_OF_MONTHS[new Date(arrDate).getMonth()] ;
 //let number_of_month = new Date(arrDate).getDate();
 //let date =`${day}, ${month} ${number_of_month}th`;

    return (

        <>
           
           <div className="card-container">

             {forecast_5_days.map((forecast_1_day, index)=>(
                 

                <div key = {index} className="card">
                    <div className="forecast-date"> 
{ARRAY_OF_DAYS[new Date(forecast_1_day.valid_date).getDay()]},{" "} {ARRAY_OF_MONTHS[new Date(forecast_1_day.valid_date).getMonth()] } {new Date(forecast_1_day.valid_date).getDate()}
                    </div>
                    <div className="weather-description"> 
                        {forecast_1_day.weather.description}
                    </div>
                    <div className="weather-icon"> 
                    <img alt="Weather Icon"
                     className="weather-icon"
                     src= {`icons/${forecast_1_day.weather.icon}.png`}
                    /> 
                    </div>
                    <div className="temp-forecast"> 
                       {forecast_1_day.temp}&deg;C  
                    </div>
                    <div className="high-low">
                        <span className="high">
                        {forecast_1_day.high_temp}&deg;C/
                        </span> 
                        <span className="low">
                        {forecast_1_day.low_temp}&deg;C
                        </span>
                    </div>


                </div>


             ))}


           </div>

        </>
    )
}

export default Forecast;