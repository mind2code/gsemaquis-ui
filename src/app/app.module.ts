import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaquisModule } from './pages/maquis/maquis.module';
import { SigninModule } from './pages/signin/signin.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AlertComponent } from './composants/alert/alert.component';
import { CommentComponent } from './pages/comment/comment.component';
import { FaqComponent } from './pages/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AlertComponent,
    CommentComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaquisModule,
    SigninModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
