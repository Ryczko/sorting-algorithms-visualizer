import { Component } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { SortService } from './services/sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public sortService: SortService,
    public settingService: SettingsService
  ) {
    this.settingService.generateNewArray();
  }
}
