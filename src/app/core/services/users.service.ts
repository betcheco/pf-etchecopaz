import { Injectable } from '@angular/core';
import { Role, User } from '../../layouts/dashboard/pages/users/models';
import { delay, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';

let MOCK_USERS: User[] = [
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
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private alerts: AlertsService) { }

  getUsers() {
    return of(MOCK_USERS).pipe(delay(1000))
  }

  addUser(newUser: User) {
    MOCK_USERS.push(newUser)
    return this.getUsers().pipe(
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se agrego el usuario correctamente')
      )
    );
  }

  deleteUser(id:number){
    MOCK_USERS = MOCK_USERS.filter( (u) => u.id != id )
    return this.getUsers().pipe(
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se elimino el usuario correctamente')
      )
    );
  }

  getUserById(id:number){
    return of(MOCK_USERS.find((u) => u.id === id)).pipe(delay(1000))
  }

  updateUser(newUser:User){
    MOCK_USERS = MOCK_USERS.map( (u) => u.id === newUser.id ? { ...u, ...newUser } : u )
    return this.getUsers().pipe(
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se actualizo el usuario correctamente')
      )
    );
  }
}
