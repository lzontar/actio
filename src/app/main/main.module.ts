import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';
import { HomeComponent } from '../home/home.component';
import { EventsComponent } from '../events/events.component';
import { NavbarComponent } from '../navbar/navbar.component';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    EventsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
