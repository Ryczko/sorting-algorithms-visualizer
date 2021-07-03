import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor(private settingsService: SettingsService) {}

  private wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  sort() {
    switch (this.settingsService.activeSort) {
      case 'bubble':
        this.bubbleSort();
        break;
      case 'selection':
        this.selectionSort();
        break;
      case 'insertion':
        this.insertionSort();
        break;
      default:
        this.bubbleSort();
    }
  }

  async selectionSort() {
    const startArray = this.settingsService.arrayToSort;

    for (let i = 0; i < startArray.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < startArray.length; j++) {
        if (startArray[j] < startArray[minIndex]) {
          minIndex = j;
        }
        await this.wait(0);
      }
      if (minIndex !== i) {
        const temp = startArray[i];
        startArray[i] = startArray[minIndex];
        startArray[minIndex] = temp;
      }
    }
  }

  async insertionSort() {
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

  async bubbleSort() {
    const startArray = this.settingsService.arrayToSort;

    for (let i = startArray.length; i > 0; i--) {
      let noSwap = true;

      for (let j = 0; j < i - 1; j++) {
        if (startArray[j] > startArray[j + 1]) {
          const temp = startArray[j];
          startArray[j] = startArray[j + 1];
          startArray[j + 1] = temp;
          noSwap = false;
        }
        await this.wait(0);
      }
      if (noSwap) break;
    }
  }
}
