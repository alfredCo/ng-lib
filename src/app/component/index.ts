import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header'
import {SideComponent} from './side'
import { Routes, RouterModule } from '@angular/router';
import {TagComponent} from './tag';
export const ROUTES: Routes = [
  {
    path:"config/configmanage",component:TagComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
