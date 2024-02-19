import { Injectable } from '@angular/core';
import { Course } from '../../layouts/dashboard/pages/courses/models';
import { catchError, delay, mergeMap, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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

const fallbackCourse: Course = {
  id:0,
  name:'',
  classes:[]

}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private alerts: AlertsService, private httpClient: HttpClient) { }

  getCourses(){
    // return of(MOCK_COURSES).pipe(delay(1000))
    return this.httpClient.get<Course[]>(environment.apiUrl + '/courses').pipe(
      catchError((error) => {
          this.alerts.showError('Error');
          return of([]);
      })
    )
  }

  getCourseById(id: number) {
    // return of(MOCK_COURSES.filter((c) => c.id == id)).pipe(delay(1000));
    return this.httpClient.get<Course>(environment.apiUrl+'/courses/'+id).pipe(
      catchError((error) => {
          this.alerts.showError('Error');
          return of(fallbackCourse)
      })
    )
  }

  addCourse(newCourse:Course){
    const payload = {
      name: newCourse.name,
      classes:newCourse.classes 
    }
    return this.httpClient.post<Course>(environment.apiUrl + '/courses', payload).pipe(
      mergeMap(() => this.getCourses()),
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se agrego el curso correctamente')
      )
    );
  }

  deleteCourse(id:number){
    return this.httpClient.delete<Course>(environment.apiUrl+ '/courses/' +id).pipe(
      mergeMap(() => this.getCourses()),
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se elimino el curso correctamente')
      )
    );
  }

  updateCourse(newCourse:Course){
    return this.httpClient.put<Course>(environment.apiUrl + '/courses/' + newCourse.id, newCourse).pipe(
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se actualizo el curso correctamente')
      )
    );
  }
}
