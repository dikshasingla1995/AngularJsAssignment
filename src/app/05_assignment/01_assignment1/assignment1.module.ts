import { NgModule } from '@angular/core';
import { Assignment1Component } from './containers/assignment1.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    Assignment1Component
  ],
  imports:[
    CommonModule
  ],
  exports: [
    Assignment1Component
  ]
})
export class Assignment1Module {

}
