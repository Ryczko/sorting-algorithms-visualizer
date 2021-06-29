import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  arraySize = 200;
  arrayToSort: number[];
  maxValue: number;

  constructor() {
    this.generateNewArray();
  }

  generateNewArray() {
    this.arrayToSort = Array.from(
      { length: this.arraySize },
      () => Math.floor(Math.random() * this.arraySize) + 1
    );

    this.maxValue = Math.max(...this.arrayToSort);
  }
}
