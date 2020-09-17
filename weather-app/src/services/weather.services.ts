import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from './weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(position: Position) {
    return this.http.get<Weather>(
      `https://localhost:5001/WeatherForecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
    );
  }
}
