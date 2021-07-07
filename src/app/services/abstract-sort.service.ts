import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export abstract class AbstractSort {
  constructor(protected settingsService: SettingsService) {}

  protected swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  protected wait(ms: number = this.settingsService.delay) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  protected async completeSort() {
    const array = this.settingsService.arrayToSort;

    for (let i = array.length - 1; i >= 0; i--) {
      array[i].color = this.settingsService.unsortedColor;
      await this.wait(5);
    }

    for (let i = 0; i < array.length; i++) {
      array[i].color = this.settingsService.getSortedColorValue(
        array[i].value,
        this.settingsService.maxValue
      );
      await this.wait(5);
    }
  }

  abstract sort(array);
}
