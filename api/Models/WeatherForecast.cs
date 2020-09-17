using System;

namespace Weather.Models
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }
        public int TemperatureC { get; set; }
        public string Location { get; set; }
        public string Status { get; set; }
        public double Humidity { get; set; }
        public double Visibility { get; set; }
        public int UVIndex { get; set; }
    }
}
