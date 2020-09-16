using System;

namespace weather
{
    public class WeatherForecast
    {
        public DateTime Date { get; set; }
        public int TemperatureC { get; set; }
        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        public string Summary { get; set; }
        public string Location { get; set; }
        public string Status { get; set; }
        public double Humidity { get; set; }
        public double Visibility { get; set; }
        public double UVIndex { get; set; }
    }
}
