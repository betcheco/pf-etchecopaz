import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';
import { SharedModule } from '../../../../shared/shared.module';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    MatIcon,
    MatTableModule,
    MatIconButton,
    SharedModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule

  ],

})
export class CoursesModule { }
