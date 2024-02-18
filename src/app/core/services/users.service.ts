import { Injectable } from '@angular/core';
import { Role, User } from '../../layouts/dashboard/pages/users/models';
import { catchError, delay, mergeMap, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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

  constructor(private alerts: AlertsService, private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<User[]>(environment.apiUrl + '/users').pipe(
      catchError((error) => {
          this.alerts.showError('Error');
          return of([]);
      })
    );
  }

  addUser(newUser: unknown) {
    return this.httpClient.post<User>(environment.apiUrl +'/users', newUser).pipe(
      mergeMap(() => this.getUsers()),
      tap(() => this.alerts.showSuccess('Realizado', 'Usuario creado exitosamente'))
    );
  }

  deleteUser(id:number){
    return this.httpClient.delete<User>(environment.apiUrl + '/users/'+id).pipe(
      mergeMap(() => this.getUsers()),
      tap(() => this.alerts.showSuccess('Realizado', 'Se elimino el usuario correctamente'))
    )

  }

  getUserById(id:number){
    return this.httpClient.get<User>(environment.apiUrl + '/users/'+ id);
  }

  updateUser(newUser:User){
    return this.httpClient.put<User>(environment.apiUrl+'/users/'+newUser.id,newUser).pipe(
      mergeMap(() => this.getUsers()),
      tap(() => this.alerts.showSuccess('Realizado', 'Se actualizo el usuario correctamente'))
    )
  }
}
