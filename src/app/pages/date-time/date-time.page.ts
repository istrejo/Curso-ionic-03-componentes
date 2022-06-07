import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {

    console.log(this.fechaNaci)
  }

  dateChange(event) {
    const element = event.detail
    const value = element.value
    console.log(new Date(value).toDateString())
  }
}
