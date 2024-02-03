import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';






@NgModule({
  declarations: [
    CoursesComponent,
  ],
  imports: [
    CommonModule,
    MatIcon,
    MatTableModule,
    MatIconButton
  ]
})
export class CoursesModule { }
