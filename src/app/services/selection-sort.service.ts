import { Injectable } from '@angular/core';
import { AbstractSort } from './abstract-sort.service';

@Injectable({
  providedIn: 'root',
})
export class SelectionSortService extends AbstractSort {
  async sort() {
    let startArray = this.settingsService.arrayToSort;

    for (let i = 0; i < startArray.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < startArray.length; j++) {
        if (startArray[j] < startArray[minIndex]) {
          minIndex = j;
        }
        await this.wait(0);
      }
      if (minIndex !== i) {
        startArray = this.swap(startArray, i, minIndex);
      }
    }
  }
}
