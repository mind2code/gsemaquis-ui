import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CommentComponent } from './pages/comment/comment.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'accueil', component: HomeComponent},
  { path: 'didactitiel', component: CommentComponent },
  { path: 'login', loadChildren: () => import('./pages/signin/signin.module').then(mod => mod.SigninModule)},
  { path: 'maquis', loadChildren: () => import('./pages/maquis/maquis.module').then(mod => mod.MaquisModule)},

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
