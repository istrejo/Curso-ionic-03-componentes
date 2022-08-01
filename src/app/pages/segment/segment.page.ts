import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Superhero } from 'src/app/core/models/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superHeroes: Observable<Superhero[]>;

  publisher: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    const value = event.detail.value;
    this.publisher = value;
  }
}
