import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AButton } from './aButton';
import { AFooter } from './aFooter';
import { AInput } from './aInput';



@NgModule({
  declarations: [ AButton, AFooter, AInput ],
  imports: [
    CommonModule
  ],
  exports: [ AButton, AFooter, AInput ]
})
export class SharedModule { }
