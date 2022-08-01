import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';

const components = [HeaderComponent, PopoverInfoComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, IonicModule],
  exports: components,
})
export class ComponentsModule {}
