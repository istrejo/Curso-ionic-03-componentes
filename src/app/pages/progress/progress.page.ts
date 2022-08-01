import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  percentage: number = 0.05; //TODO: 0 - 1

  constructor() {}

  ngOnInit() {}

  rangeChange(event) {
    const value = event.detail.value;
    this.percentage = value / 100;
  }
}
