import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  characters: string[] = [
    'Aquaman',
    'Superman',
    'Batman',
    'Wonder Woman',
    'Flash',
  ];

  constructor() {}

  ngOnInit() {}

  // Método para controlar el reorder
  doReorder(event: any) {
    const movedItem = this.characters.splice(event.detail.from, 1)[0];

    this.characters.splice(event.detail.to, 0, movedItem);

    event.detail.complete();

    console.log(this.characters);
  }
}
