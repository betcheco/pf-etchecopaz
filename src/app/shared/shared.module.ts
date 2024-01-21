import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { Font20Directive } from './font-20.directive';



@NgModule({
  declarations: [
    FullNamePipe,
    Font20Directive
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,
    Font20Directive
  ]
})
export class SharedModule { }
