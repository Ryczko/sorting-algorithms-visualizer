import { Injectable } from '@angular/core';
import { AbstractSort } from './abstract-sort.service';

@Injectable({
  providedIn: 'root',
})
export class BubbleSortService extends AbstractSort {
  async sort() {
    const {
      arrayToSort: array,
      comparedColor,
      unsortedColor,
      sortedColor,
    } = this.settingsService;

    for (let i = array.length; i > 0; i--) {
      let noSwap = true;

      for (let j = 0; j < i - 1; j++) {
        array[j].color = comparedColor;
        array[j + 1].color = comparedColor;

        if (array[j].value > array[j + 1].value) {
          this.swap(array, j, j + 1);
          noSwap = false;
        }

        await this.wait();
        array[j].color = unsortedColor;
        array[j + 1].color = unsortedColor;
      }
      array[i - 1].color = sortedColor;
      if (noSwap) break;
    }
    this.completeSort();
  }
}
