import { Injectable } from '@angular/core';
import { SortElement } from '../models/Sort-element.model';
import { SortType } from '../models/Sort-type.model';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  arraySize = 90;
  arrayToSort: SortElement[];
  delay = 1;
  unsortedColor = 'white';
  comparedColor = 'black';
  maxValue = this.arraySize - 1;

  activeSort: SortType = 'bubble';
  allSorts: SortType[] = ['bubble', 'selection', 'insertion'];

  getSortedColorValue(value: number, maxValue: number) {
    return `hsl(${Math.round((value / maxValue) * 100) * 3.6}, 100%, 50%)`;
  }

  generateNewArray() {
    this.arrayToSort = new Array(this.arraySize);

    for (let i = 0; i < this.arraySize; i++) {
      this.arrayToSort[i] = {
        value: i + 1,
        color: this.unsortedColor,
      };
    }
    this.shuffleArray(this.arrayToSort);
  }

  private shuffleArray(array: SortElement[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
