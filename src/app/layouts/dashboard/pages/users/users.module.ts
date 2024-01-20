import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule} from '@angular/material/sort';
import {  MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsersComponent } from './users.component';
import { TableComponent } from './components/table/table.component';




@NgModule({
  declarations: [
    UsersComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSort,
    MatSortModule,
    MatPaginator,
    MatPaginatorModule
  ],
  exports: [ UsersComponent,
  TableComponent ]
})
export class UsersModule { }
