import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { SharedModule } from '../../../../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';






@NgModule({
  declarations: [
    ClassesComponent,
    ClassDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconButton,
    MatIcon,
    SharedModule,
    MatFormFieldModule,
    MatInput,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class ClassesModule { }
