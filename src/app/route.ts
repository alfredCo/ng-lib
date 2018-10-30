import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import * as view from './component/';
import {AppTestComponent} from './app.test';
import {HeaderComponent} from './header'
import {SideComponent} from './side'
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

const ROUTES: Routes = [
  {
    path:"",
    //redirectTo: '/coursemanage', pathMatch: 'full',
    component:AppTestComponent,
    children:[
      { path: 'coursemanage/tags', component: view.TagComponent },
      { path: 'coursemanage/discipline', component: view.TagComponent },
    ]
  },
  {
    path:"resource/resourceview",
    component:view.TagComponent
  }
];
@NgModule({
  declarations: [
    view.TagComponent,
    AppTestComponent,
    HeaderComponent,
    SideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers:[view.TagService],
  exports: [RouterModule]
})
export class RouteComponent{}
