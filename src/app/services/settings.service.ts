import { Injectable } from '@angular/core';
import { Sort } from '../models/Sort.model';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  arraySize = 70;
  arrayToSort: number[];
  maxValue = this.arraySize - 1;

  activeSort: Sort = 'bubble';
  allSorts: Sort[] = ['bubble', 'selection', 'insertion'];
  constructor() {}

  generateNewArray() {
    this.arrayToSort = new Array(this.arraySize);

    for (let i = 0; i < this.arraySize; i++) {
      this.arrayToSort[i] = i + 1;
    }
    this.shuffleArray(this.arrayToSort);
  }

  private shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
