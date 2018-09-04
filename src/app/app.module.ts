import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header'
import {SideComponent} from './side'
import {RouteComponent} from './route';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    RouteComponent,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
