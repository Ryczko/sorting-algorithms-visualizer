import { Injectable } from '@angular/core';
import { BubbleSortService } from './bubble-sort.service';
import { InsertionSortService } from './insertion-sort.service';
import { SelectionSortService } from './selection-sort.service';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor(
    private settingsService: SettingsService,
    private bubbleSortService: BubbleSortService,
    private insertionSortService: InsertionSortService,
    private selectionSortService: SelectionSortService
  ) {}

  sort() {
    switch (this.settingsService.activeSort) {
      case 'bubble':
        this.bubbleSortService.sort();
        break;
      case 'selection':
        this.selectionSortService.sort();
        break;
      case 'insertion':
        this.insertionSortService.sort();
        break;
      default:
        this.bubbleSortService.sort();
    }
  }
}
