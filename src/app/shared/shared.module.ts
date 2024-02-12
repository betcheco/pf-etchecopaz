import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './pipes/full-name.pipe';
import { Font20Directive } from './directives/font-20.directive';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    FullNamePipe,
    Font20Directive,
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    FullNamePipe,
    Font20Directive,
    PageHeaderComponent
  ]
})
export class SharedModule { }
