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
      getSortedColorValue,
      maxValue,
    } = this.settingsService;

    array[0].color = getSortedColorValue(array[0].value, maxValue);
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
          array[k].color = getSortedColorValue(array[k].value, maxValue);
        }
      }
      array[j + 1] = tempElement;
      array[i].color = getSortedColorValue(array[i].value, maxValue);
    }

    this.completeSort();
  }
}
