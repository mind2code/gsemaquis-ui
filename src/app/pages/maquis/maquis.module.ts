import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquisRoutingModule } from './maquis-routing.module';
import { MaquisComponent } from './maquis/maquis.component';
import { MaquisDetailsComponent } from './maquis-details/maquis-details.component';
import { MaquisMenuComponent } from './maquis-menu/maquis-menu.component';


@NgModule({
  declarations: [MaquisComponent, MaquisDetailsComponent, MaquisMenuComponent],
  imports: [
    CommonModule,
    MaquisRoutingModule
  ]
})
export class MaquisModule { }
