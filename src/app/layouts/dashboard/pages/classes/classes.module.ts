import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { SharedModule } from '../../../../shared/shared.module';



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
    SharedModule
  ]
})
export class ClassesModule { }
