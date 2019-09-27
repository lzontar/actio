import { Component, OnInit, Input } from '@angular/core';
import { WebUtil } from '../framework/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  segment = 'home';
  webUtil: WebUtil<any>;
  constructor(router: Router) {
    this.webUtil = new WebUtil(router);
  }

  ngOnInit() {
  }

  segmentSelected(segment: string) {
    this.segment = segment;
  }
}
