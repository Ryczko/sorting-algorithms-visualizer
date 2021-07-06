import { Injectable } from '@angular/core';
import { AbstractSort } from './abstract-sort.service';

@Injectable({
  providedIn: 'root',
})
export class BubbleSortService extends AbstractSort {
  async sort() {
    let startArray = this.settingsService.arrayToSort;

    for (let i = startArray.length; i > 0; i--) {
      let noSwap = true;

      for (let j = 0; j < i - 1; j++) {
        if (startArray[j] > startArray[j + 1]) {
          startArray = this.swap(startArray, j, j + 1);
          noSwap = false;
        }

        await this.wait(0);
      }
      if (noSwap) break;
    }
  }
}
