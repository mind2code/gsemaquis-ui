import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaquisComponent } from './maquis/maquis.component';
import { MaquisDetailsComponent } from './maquis-details/maquis-details.component';
import { MaquisMenuComponent } from './maquis-menu/maquis-menu.component';


const routes: Routes = [
  { path: '', component: MaquisComponent },
  { path: 'details', component: MaquisDetailsComponent },
  { path: 'menus', component: MaquisMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaquisRoutingModule { }
