import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';


@NgModule({
  declarations: [
    ClassesComponent,
    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconButton,
    MatIcon
  ]
})
export class ClassesModule { }
