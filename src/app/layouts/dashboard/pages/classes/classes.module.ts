import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    ClassesComponent,
    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatSort
  ]
})
export class ClassesModule { }
