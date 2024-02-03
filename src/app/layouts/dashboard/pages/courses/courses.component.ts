import { Component } from '@angular/core';
import { Course } from './models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: Course[] = [
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
  ];
  
displayedColumns = ['id', 'name', 'actions'];




}
