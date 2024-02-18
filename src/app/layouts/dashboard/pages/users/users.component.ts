import { Component, OnInit, ViewChild } from '@angular/core';
import { Role, User } from './models';
import { UsersService } from '../../../../core/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

 displayedColumns: string[] = ['id', 'name', 'email', 'role', 'actions'];
 formVisible = false;
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
}
  ngOnInit(): void {
    this.getUsers()
  }


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
    // this.lastId++;
    const mapNewUser = {
      firstName:newUser.firstName,
      lastName:newUser.lastName,
      email:newUser.email,
      password:newUser.password,
      role:newUser.role
    }
   
    this.usersService.addUser(mapNewUser).subscribe({
      next: (newUsers) => {
        this.users = [...newUsers]
      },
    })
  } else {
    this.usersService.updateUser(newUser).subscribe({
      next: (newUsers) => {
        this.users = [...newUsers]
      }
    })
  }
  this.formVisible = false
}

onDelete(id:number){
  this.usersService.deleteUser(id).subscribe({
    next:(newUsers) => {
      this.users = newUsers
    }
  })
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
