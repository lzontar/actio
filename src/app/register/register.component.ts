import { Component, OnInit, Input } from '@angular/core';
import { WebUtil } from '../framework/util';
import { Router } from '@angular/router';
import { ProfileDTO } from './model/profile.model';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() webUtil: WebUtil<ProfileDTO>;

  registrationForm: any;
  step = 1;
  stepText = ['Log in data', 'Personal data', 'Finish'];
  submitted = [false, false];
  nextStepText = 'Next';
  profileDto: ProfileDTO;
  constructor(router: Router, private fb: FormBuilder) {
    this.webUtil = new WebUtil(router);
    this.profileDto = new ProfileDTO();
    this.createForm();
  }


  ngOnInit() {
  }

  register() {
    console.log(this.profileDto);
  }
  returnToLogin() {
    this.webUtil.navigate(['..', 'login'])
  }

  nextStep() {
    this.submitted[this.step - 1] = true;
    // tslint:disable-next-line: max-line-length
    if (!this.registrationForm.controls['email'].invalid && this.step === 1 && this.profileDto.password === this.profileDto.confirmPassword || this.step === 2 && this.registrationForm.status !== 'INVALID') {
      this.step++;
      if (this.step === 2) {
        this.nextStepText = 'Register';
      }
      if (this.step === 3) {
        this.register();
      }
    }
  }
  prevStep() {
    this.step--;
    this.submitted[this.step - 1] = false;
    if (this.step === 1) {
      this.nextStepText = 'Next';
    }
  }

  createForm() {
    this.registrationForm = this.fb.group({
      email: ['', Validators.required ],
      country: ['', Validators.required ],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],

   });
   }
}
