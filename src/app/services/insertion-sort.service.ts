import { Injectable } from '@angular/core';
import { AbstractSort } from './abstract-sort.service';

@Injectable({
  providedIn: 'root',
})
export class InsertionSortService extends AbstractSort {
  async sort() {
    const {
      arrayToSort: array,
      comparedColor,
      sortedColor,
    } = this.settingsService;

    array[0].color = sortedColor;
    for (let i = 1; i < array.length; i++) {
      const tempElement = array[i];
      let j = i - 1;

      array[i].color = comparedColor;

      while (j >= 0 && array[j].value > tempElement.value) {
        array[j].color = comparedColor;

        array[j + 1] = array[j];
        j--;
        await this.wait();

        for (let k = i; k >= 0; k--) {
          array[k].color = sortedColor;
        }
      }
      array[j + 1] = tempElement;
      array[i].color = sortedColor;
    }

    this.completeSort();
  }
}
