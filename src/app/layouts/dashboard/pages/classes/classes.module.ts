import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    ClassesComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClassesModule { }
