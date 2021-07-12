import { Injectable } from '@angular/core';
import { AbstractSort } from './abstract-sort.service';

@Injectable({
  providedIn: 'root',
})
export class SelectionSortService extends AbstractSort {
  async sort() {
    const {
      arrayToSort: array,
      comparedColor,
      unsortedColor,
      sortedColor,
    } = this.settingsService;

    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        array[j].color = comparedColor;
        array[minIndex].color = comparedColor;

        await this.wait();
        if (array[j].value < array[minIndex].value) {
          array[minIndex].color = unsortedColor;
          minIndex = j;
        } else {
          array[j].color = unsortedColor;
        }
      }
      if (minIndex !== i) {
        this.swap(array, i, minIndex);
      }
      array[i].color = sortedColor;
    }

    this.completeSort();
  }
}
