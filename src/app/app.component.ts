import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './core/models/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  menuOpts: Observable<Componente[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getMenuOpts();
  }

  getMenuOpts() {
    this.menuOpts = this.dataService.getMenuOpts();
  }
}
