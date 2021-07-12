import { Injectable } from '@angular/core';
import { SortElement } from '../models/Sort-element.model';
import { AbstractSort } from './abstract-sort.service';

@Injectable({
  providedIn: 'root',
})
export class MergeSortService extends AbstractSort {
  async merge(array: SortElement[], low, mid, high) {
    const { comparedColor, sortedColor } = this.settingsService;

    const size1 = mid - low + 1;
    const size2 = high - mid;

    let left = new Array(size1);
    let right = new Array(size2);

    for (let i = 0; i < size1; i++) {
      await this.wait();
      array[low + i].color = comparedColor;
      left[i] = array[low + i].value;
    }

    for (let i = 0; i < size2; i++) {
      await this.wait();
      array[mid + 1 + i].color = comparedColor;
      right[i] = array[mid + 1 + i].value;
    }

    await this.wait();
    let i = 0,
      j = 0,
      k = low;

    while (i < size1 && j < size2) {
      await this.wait();

      if (parseInt(left[i]) <= parseInt(right[j])) {
        array[k].color = sortedColor;

        array[k].value = left[i];
        i++;
        k++;
      } else {
        array[k].color = sortedColor;

        array[k].value = right[j];
        j++;
        k++;
      }
    }
    while (i < size1) {
      await this.wait();

      array[k].color = sortedColor;

      array[k].value = left[i];
      i++;
      k++;
    }
    while (j < size2) {
      await this.wait();

      array[k].color = sortedColor;

      array[k].value = right[j];
      j++;
      k++;
    }
  }

  async mergeSort(array: SortElement[], left, right) {
    if (left >= right) return;

    const mid = left + Math.floor((right - left) / 2);

    await this.mergeSort(array, left, mid);
    await this.mergeSort(array, mid + 1, right);
    await this.merge(array, left, mid, right);
  }

  async sort() {
    const array = this.settingsService.arrayToSort;
    await this.mergeSort(array, 0, array.length - 1);
    this.completeSort();
  }
}
