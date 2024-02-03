import { Injectable } from '@angular/core';
import { Course } from '../../layouts/dashboard/pages/courses/models';
import { delay, of } from 'rxjs';

let MOCK_COURSES: Course[] = [
  {
    id:1,
    name:'Angular',
    classes:[]
  },
  {
    id:2,
    name:'React',
    classes:[]
  },
  {
    id:3,
    name:'Web',
    classes:[]
  }
]

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(){
    return of(MOCK_COURSES).pipe(delay(1000))
  }

  addCourse(newCourse:Course){
    MOCK_COURSES.push(newCourse);
    return this.getCourses()
  }

  deleteCourse(id:number){
    MOCK_COURSES = MOCK_COURSES.filter((c) => c.id != id)
    return this.getCourses()
  }

  updateCourse(newCourse:Course){
    MOCK_COURSES = MOCK_COURSES.map( (c) => c.id === newCourse.id ? { ...c, ...newCourse } : c )
    return this.getCourses()
  }
}
