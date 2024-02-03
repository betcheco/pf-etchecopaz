import { Component, OnInit, ViewChild } from '@angular/core';
import { Role, User } from './models';
import { UsersService } from '../../../../core/services/users.service';


const MOCK_USERS: User[] = [
  {
    id:1,
    firstName: 'Naruto',
    lastName: 'Uzumaki',
    email: "narutito@gmail.com",
    password : "",
    role: Role.STUDENT
} ,
{
  id:2,
  firstName: 'Sasuke',
  lastName: 'Uchiha',
  email: "sask@gmail.com",
  password : "",
  role: Role.STUDENT
},
{
  id:3,
  firstName: 'Sakura',
  lastName: 'Haruno',
  email: "saku@gmail.com",
  password : "",
  role: Role.STUDENT
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
export class UsersComponent implements OnInit{

 displayedColumns: string[] = ['id', 'name', 'email', 'role', 'actions'];
 formVisible = false;
//  users:User[] = MOCK_USERS;
 users:User[] = [];
 dataSource = this.users
 lastId = this.users.length;

 user:User = {
   id: 0,
   firstName: '',
   lastName: '',
   email: '',
   password: '',
   role: null
 }


constructor(private usersService:UsersService){
  // this.initializeUsers();
}
  ngOnInit(): void {
    this.getUsers()
  }

// async initializeUsers() {
//   const userList = await this.usersService.getUsers();
//   this.users = userList;
// }

getUsers(){
  this.usersService.getUsers().subscribe(({
    next: (_users) => {
      this.users = _users
      this.lastId = this.users.length;
    }
  }))
}


 addUser(newUser: User) {
  if ( newUser.id === 0 ){
    this.lastId++;
    this.users = [...this.users, {...newUser, id: this.lastId}]
  } else {
    this.users = this.users.map( (u) => u.id === newUser.id ? { ...u, ...newUser } : u )
  }
  console.log(newUser)
  this.formVisible = false
}

onDelete(id:number){
  this.users = this.users.filter( (u) => u.id != id )
}

onEdit(user: User) {
    this.user = user
    this.showForm()
  }


showForm() {
    this.formVisible = true
}

handleOnCancel(value:boolean){
  this.formVisible = value
}
    

}
