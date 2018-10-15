import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import  AppComponent  from './app.component';
// import {HeaderComponent} from './header'
// import {SideComponent} from './side'
import {RouteComponent} from './route';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './http.InterceptorService';

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    //SideComponent
  ],
  imports: [
    BrowserModule,
    RouteComponent,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export default class AppModule {
  aaa = 0;
 }
