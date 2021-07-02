import { Component, OnInit } from '@angular/core';
import { Sort } from '../models/Sort.model';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(public settingsService: SettingsService) {}

  changeSort(newSort: Sort) {
    this.settingsService.activeSort = newSort;
  }
}
