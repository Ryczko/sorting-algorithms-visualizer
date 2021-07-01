import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  constructor(private settingsService: SettingsService) {}

  min = 100;
  maxsSound = 600;

  private wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
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
