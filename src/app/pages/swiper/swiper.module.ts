import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { SwiperPageRoutingModule } from './swiper-routing.module';

import { SwiperPage } from './swiper.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperPageRoutingModule,
    ComponentsModule,
    SwiperModule,
  ],
  declarations: [SwiperPage],
})
export class SwiperPageModule {}
