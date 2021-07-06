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
    return array;
  }

  protected wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  abstract sort(array);
}
