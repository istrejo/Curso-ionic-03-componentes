import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/core/models/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  components: Observable<Componente[]>;

  constructor(
    private menuCtrl: MenuController,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

  showMenu() {
    this.menuCtrl.open('menu');
  }
}
