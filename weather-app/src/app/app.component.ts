import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/services/weather.model';
import { WeatherService } from 'src/services/weather.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weatherData: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.weatherService.getWeather(position).subscribe((weather) => {
          this.weatherData = weather;
        });
      },
      () => {
        alert('User location not given');
      },
      { timeout: 10000 }
    );
  }
}
