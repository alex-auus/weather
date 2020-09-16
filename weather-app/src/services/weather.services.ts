import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from './weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get<Weather>('https://localhost:5001/WeatherForecast');
  }
}
