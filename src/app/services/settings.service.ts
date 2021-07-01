import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  arraySize = 70;
  arrayToSort: number[];
  maxValue: number;
  constructor() {}

  generateNewArray() {
    this.arrayToSort = Array.from(
      { length: this.arraySize },
      () => Math.floor(Math.random() * this.arraySize) + 1
    );

    this.maxValue = Math.max(...this.arrayToSort);
  }
}
