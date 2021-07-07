import { Component, OnInit } from '@angular/core';
import { SortType } from '../models/Sort-type.model';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(public settingsService: SettingsService) {}

  changeSort(newSort: SortType) {
    this.settingsService.activeSort = newSort;
  }
}
