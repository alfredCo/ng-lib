import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TagComponent} from './tag';
import {CommonModule} from '@angular/common';
const ROUTES: Routes = [
  {
    path:"config/configmanage",component:TagComponent
  }
];
@NgModule({
  declarations: [
    TagComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class RouteComponent{}
