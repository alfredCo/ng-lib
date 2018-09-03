import { Component } from '@angular/core';

@Component({
  selector: 'header-inner',
  templateUrl: './app.header.html'
})
export class HeaderComponent {
  username = 'admin';
  changPassword(){
    console.log(123);
  }
}
