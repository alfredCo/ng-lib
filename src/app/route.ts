import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import * as view from './component/';

console.log(view)
const ROUTES: Routes = [
  {
    path:"coursemanage/tags",component:view.TagComponent
  }
];
@NgModule({
  declarations: [
    view.TagComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class RouteComponent{}
