import { Injectable } from '@angular/core';
import { Class } from '../../layouts/dashboard/pages/classes/models';
import {  debounceTime, of } from 'rxjs';

const MOCK_CLASSES:Class[] = [
  {
    id:1,
    teacher: 4,
    students: []
  },
  {
    id:2,
    teacher: 5,
    students: []
  }
]

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  constructor() { }

  getClasses(){
    return of(MOCK_CLASSES).pipe(debounceTime(1000));
  }

}
