import { Input, Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'a-footer',
  template: `
    <footer [ngClass]="this.isDarkTheme ? 'darkTheme' : 'lightTheme'">
      <p  class="text-xs-center">© Copyright 2019. All rights reserved.</p>
    </footer>
  `,
  styleUrls: ['./aFooter.scss']

})

export class AFooter {
  @Input() isDarkTheme: boolean;
  constructor() { }
}
