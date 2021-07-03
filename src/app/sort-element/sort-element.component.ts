import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-element',
  templateUrl: './sort-element.component.html',
  styleUrls: ['./sort-element.component.scss'],
})
export class SortElementComponent implements OnInit {
  @Input() value: number;

  ngOnInit(): void {}

  getColorValue() {
    return `hsl(${Math.round(this.value) * 3.6}, 100%, 50%)`;
  }
}
