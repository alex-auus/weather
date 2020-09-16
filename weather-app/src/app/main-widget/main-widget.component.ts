import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/services/weather.model';

@Component({
  selector: 'app-main-widget',
  templateUrl: './main-widget.component.html',
  styleUrls: ['./main-widget.component.scss'],
})
export class MainWidgetComponent implements OnInit {
  @Input() weather: Weather;

  constructor() {}

  ngOnInit(): void {}

  iconType(status: string) {
    switch (status) {
      case 'Sunny':
        return 'wb_sunny';
      default:
        return 'wb_cloudy';
    }
  }
}
