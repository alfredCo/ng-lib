import { Component } from '@angular/core';
// import {HeaderComponent} from './header'
// import {SideComponent} from './side'
@Component({
  selector: 'app-test',
  templateUrl: './app.test.html'
})
export class AppTestComponent {
  title = 'app';
  constructor(){
    console.log(123);
  }
}
