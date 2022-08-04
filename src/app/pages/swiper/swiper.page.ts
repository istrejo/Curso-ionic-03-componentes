import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

import { SwiperComponent } from 'swiper/angular';

import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.page.html',
  styleUrls: ['./swiper.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperPage implements OnInit {
  // My swiper
  @ViewChild('swiper') swiper: SwiperComponent;

  swiperConfig: SwiperOptions = {
    pagination: { dynamicBullets: true },
  };

  slides: { img: string; title: string; desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      title: 'Comparte Fotos',
      desc: 'Mira y comparte increíbles fotos de todo el mundo',
    },
    {
      img: '/assets/slides/music-player-2.svg',
      title: 'Escucha Música',
      desc: 'Toda tu música favorita está aquí',
    },
    {
      img: '/assets/slides/calendar.svg',
      title: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposición',
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      title: 'Tu ubicación',
      desc: 'Siempre sabremos donde estás!',
    },
  ];
  constructor(private nacCtrl: NavController) {}

  ngOnInit() {}

  onClick() {
    this.nacCtrl.navigateBack('/');
  }
}
