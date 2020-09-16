import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/services/weather.model';

@Component({
  selector: 'app-secondary-widget',
  templateUrl: './secondary-widget.component.html',
  styleUrls: ['./secondary-widget.component.scss'],
})
export class SecondaryWidgetComponent implements OnInit {
  @Input() weather: Weather;

  constructor() {}

  ngOnInit(): void {}
}
