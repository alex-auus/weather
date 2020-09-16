import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-widget-item',
  templateUrl: './secondary-widget-item.component.html',
  styleUrls: ['./secondary-widget-item.component.scss'],
})
export class SecondaryWidgetItemComponent implements OnInit {
  @Input() title: string;
  @Input() value: string;

  constructor() {}

  ngOnInit(): void {}
}
