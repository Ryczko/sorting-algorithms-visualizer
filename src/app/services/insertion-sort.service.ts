import { Injectable } from '@angular/core';
import { AbstractSort } from './abstract-sort.service';

@Injectable({
  providedIn: 'root',
})
export class InsertionSortService extends AbstractSort {
  async sort() {
    const startArray = this.settingsService.arrayToSort;

    for (let i = 1; i < startArray.length; i++) {
      const value = startArray[i];
      let j = i - 1;
      while (j >= 0 && startArray[j] > value) {
        startArray[j + 1] = startArray[j];
        j--;
        await this.wait(0);
      }
      startArray[j + 1] = value;
    }
  }
}
