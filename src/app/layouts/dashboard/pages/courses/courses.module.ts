import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [
    CoursesComponent,
  ],
  imports: [
    CommonModule,
    MatIcon,
    MatTableModule
  ]
})
export class CoursesModule { }
