import { Component } from '@angular/core';

@Component({
  selector: 'settings-page',
  template: `
    <div>{{tag}}</div>
  `
})
export class TagComponent {
  tag = 'is tag';
}
