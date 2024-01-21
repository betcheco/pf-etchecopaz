import { Component, ViewChild } from '@angular/core';
import { Role, User } from './models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


const MOCK_USERS: User[] = [
  {
    id:1,
    firstName: 'Naruto',
    lastName: 'Uzumaki',
    email: "narutito@gmail.com",
    password : "",
    role: Role.ALUMN
} ,
{
  id:2,
  firstName: 'Sasuke',
  lastName: 'Uchiha',
  email: "sask@gmail.com",
  password : "",
  role: Role.ALUMN
},
{
  id:3,
  firstName: 'Sakura',
  lastName: 'Haruno',
  email: "saku@gmail.com",
  password : "",
  role: Role.ALUMN
},
{
  id:4,
  firstName: 'Kakashi',
  lastName: 'Hatake',
  email: "kaha@gmail.com",
  password : "",
  role: Role.TEACHER
},
{
  id:5,
  firstName: 'Maito',
  lastName: 'Guy',
  email: "magu@gmail.com",
  password : "",
  role: Role.TEACHER
},
{
  id:6,
  firstName: 'Minato',
  lastName: 'Namikaze',
  email: "mina@gmail.com",
  password : "",
  role: Role.ADMIN
}
]
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent{
  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
 users:User[] = MOCK_USERS;
 dataSource: MatTableDataSource<User>;

 @ViewChild(MatPaginator)
 paginator!: MatPaginator;
 @ViewChild(MatSort)
 sort!: MatSort;

 constructor(){
  console.log(this.users)
  this.dataSource = new MatTableDataSource(this.users)
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

 addUser(newUser: User) {
  console.log("addUser")
  this.users = [...this.users, newUser]
  // this.users = []
}

}
