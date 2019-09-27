import { Input, Component, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'a-input',
  template: `
  <div class="form-row p-3">
    <div class="col-11">
      <div class="col-md-12 mb-12">
        <label>{{this.label}}</label>
        <div class="input-group">
          <input type="{{this.type}}}" class="form-control" placeholder="{{this.placeholder}}" required>
        </div>
        <div class="invalid-tooltip">
          Please choose a unique and valid phone number.
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./aButton.scss']

})

export class AInput {
  @Input() label;
  @Input() placeholder?;
  constructor() {

  }
}
