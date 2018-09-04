import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TagComponent} from './tag';
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
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class RouteComponent{}
