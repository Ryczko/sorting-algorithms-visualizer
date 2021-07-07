import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-sort-element',
  templateUrl: './sort-element.component.html',
  styleUrls: ['./sort-element.component.scss'],
})
export class SortElementComponent {
  @Input() value: number;
  @Input() color: string;

  constructor(public settingsService: SettingsService) {}

  getElementWidth() {
    return `calc(${100 / (this.settingsService.maxValue + 1)}% - 2px)`;
  }
}
