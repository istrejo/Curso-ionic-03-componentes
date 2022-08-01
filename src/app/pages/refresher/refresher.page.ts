import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  @ViewChild(IonRefresher) refresher: IonRefresher;

  items: any[] = [];

  constructor() {}

  ngOnInit() {}

  doRefresh() {
    setTimeout(() => {
      this.items = Array(20);
      this.refresher.complete();
    }, 3000);
  }
}
