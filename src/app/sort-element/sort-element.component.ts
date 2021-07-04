import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-sort-element',
  templateUrl: './sort-element.component.html',
  styleUrls: ['./sort-element.component.scss'],
})
export class SortElementComponent {
  @Input() value: number;

  constructor(public settingsService: SettingsService) {}

  getColorValue() {
    return `hsl(${Math.round(this.value) * 3.6}, 100%, 50%)`;
  }

  getElementWidth() {
    return `calc(${100 / this.settingsService.maxValue}% - 3px)`;
  }
}
