import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { WebUtil } from '../framework/util';
import { Router } from '@angular/router';
import { LoginDTO } from './model/login.model';
;

declare var require: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  webUtil: WebUtil<LoginDTO>;
  @Output() registerClicked = new EventEmitter<any>();
  selectedCountry: any;
  constructor(router: Router) {
    this.webUtil = new WebUtil(router);
  }

  ngOnInit() {
  }

  login() {
    this.webUtil.navigate(['..', 'home']);
  }
}
