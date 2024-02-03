import { Component } from '@angular/core';
import { Course } from './models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
onDelete(arg0: any) {
throw new Error('Method not implemented.');
}
onEdit(_t36: any) {
throw new Error('Method not implemented.');
}

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
