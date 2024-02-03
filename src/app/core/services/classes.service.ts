import { Injectable } from '@angular/core';
import { Classes } from '../../layouts/dashboard/pages/classes/models';

const MOCK_CLASSES = [
  {
    id:1,
    teacher: 4,
    students: [1]
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
}
