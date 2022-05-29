import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  components: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirecTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirecTo: '/buttons',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirecTo: '/card',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
