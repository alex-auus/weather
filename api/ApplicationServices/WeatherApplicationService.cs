using System;
using Weather.Models;

namespace Weather.ApplicationServices
{
    public interface IWeatherApplicationService
    {
        WeatherForecast GetWeatherAtLocation(double latitude, double longitude);
    }
    public class WeatherApplicationService : IWeatherApplicationService
    {

        public WeatherForecast GetWeatherAtLocation(double latitude, double longitude)
        {
            var rng = new Random();
            return new WeatherForecast
            {
                Date = DateTime.Now,
                TemperatureC = rng.Next(-20, 55),
                Humidity = 0.68,
                Location = "Brisbane",
                Status = rng.Next(0, 2) == 0 ? "Sunny" : "Cloudy",
                UVIndex = 1,
                Visibility = 4
            };
        }
    }
}