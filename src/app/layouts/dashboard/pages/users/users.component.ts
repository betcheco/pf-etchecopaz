import { Component, ViewChild } from '@angular/core';
import { Role, User } from './models';
import { UsersService } from '../../../../core/services/users.service';


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

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'actions'];
 users:User[] = MOCK_USERS;
 dataSource = this.users

 user:User = {
   id: 0,
   firstName: 'Prueba',
   lastName: '',
   email: '',
   password: '',
   role: null
 }


constructor(private usersService:UsersService){
  console.log(this.user);
  // this.initializeUsers();
}

async initializeUsers() {
  const userList = await this.usersService.getUsers();
  this.users = userList;
}


 addUser(newUser: User) {
  console.log("addUser")
  this.users = [...this.users, newUser]
  console.log(this.users.length)
  // this.users = []
}

onDelete(id:number){
  this.users = this.users.filter( (u) => u.id != id )
}

onEdit(user: User) {
    this.user = user
    console.log(this.user)
  }

}
