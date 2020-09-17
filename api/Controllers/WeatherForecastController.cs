using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Weather.ApplicationServices;
using Weather.Models;

namespace Weather.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IWeatherApplicationService weatherApplicationService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IWeatherApplicationService weatherApplicationService)
        {
            _logger = logger;
            this.weatherApplicationService = weatherApplicationService;
        }

        [HttpGet]
        public WeatherForecast Get(double latitude, double longitude)
        {
            return weatherApplicationService.GetWeatherAtLocation(latitude, longitude);
        }
    }
}
