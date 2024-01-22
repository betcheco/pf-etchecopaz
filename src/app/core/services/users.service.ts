import { Injectable } from '@angular/core';
import { Role, User } from '../../layouts/dashboard/pages/users/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  async getUsers(): Promise<User[]> {
    return [
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
}
}
