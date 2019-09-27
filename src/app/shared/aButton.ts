import { Input, Component, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'a-button',
  template: `
    <button class="btn col-12 a-button" (click)="this.onClickButton($event)">
      <i [ngClass]="this.icon" style="padding-right:5%;" *ngIf="this.icon !== undefined && this.icon != null"></i>{{this.text}}
    </button>
  `,
  styleUrls: ['./aButton.scss']

})

export class AButton {
  @Input() text;
  @Input() icon?;
  @Output() onClick? = new EventEmitter<any>();

  constructor() {

  }

  onClickButton(event) {
    this.onClick.emit(event);
  }
}
