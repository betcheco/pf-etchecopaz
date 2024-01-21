import { AfterViewInit, Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Role, User } from '../../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements AfterViewInit{

  @Input({required:true})
  users!: User[];

  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    console.log("table ", this.users)
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(){
    console.log("on init ", this.users)
    this.dataSource = new MatTableDataSource(this.users);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

