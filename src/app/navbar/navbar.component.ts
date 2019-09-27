import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { WebUtil } from '../framework/util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() segmentSelected = new EventEmitter<string>();
  @Input() webUtil: WebUtil<any>;
  constructor() { }

  ngOnInit() {
  }
  selectSegment(selectedSegment: string) {
    this.segmentSelected.emit(selectedSegment);
  }
  signOut() {
    this.webUtil.navigate(['..', 'login']);
  }
}
