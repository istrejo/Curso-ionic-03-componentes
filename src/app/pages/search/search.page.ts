import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Album } from 'src/app/core/models/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild(IonSearchbar) searchBar: IonSearchbar;
  seachText: string = '';

  albums: Album[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums().subscribe((albums) => (this.albums = albums));
  }

  onSearchChange() {
    const value = this.searchBar.value;
    this.seachText = value;
  }
}
