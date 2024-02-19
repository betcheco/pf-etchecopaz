import { Injectable } from '@angular/core';
import { ClassRoom } from '../../layouts/dashboard/pages/classes/models';
import {  catchError, debounceTime, delay, mergeMap, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

// let MOCK_CLASSES:Class[] = [
//   {
//     id:1,
//     teacher: 4,
//     students: []
//   },
//   {
//     id:2,
//     teacher: 5,
//     students: []
//   }
// ]

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  constructor(private alerts: AlertsService, private httpClient: HttpClient) { }

  getClasses(){
    return this.httpClient.get<ClassRoom[]>(environment.apiUrl + '/classes').pipe(
      catchError((error) => {
        this.alerts.showError('Error');
        return of([]);
    })
    )
  }

  addClass(newClass:ClassRoom){
    const payload = {
      teacher: newClass.teacher,
      students: newClass.students
    }
    return this.httpClient.post<ClassRoom>(environment.apiUrl+'/classes', payload).pipe(
      mergeMap(() => this.getClasses()),
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se agrego la clase correctamente')
      )
    );
  }

  deleteClass(id:number){
    return this.httpClient.delete<ClassRoom>(environment.apiUrl + '/classes/' + id).pipe(
      mergeMap(() => this.getClasses()),
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se elimino la clase correctamente')
      )
    );
  }

  updateClass(newClass:ClassRoom){
    return this.httpClient.put<ClassRoom>(environment.apiUrl + '/classes/'+newClass.id,newClass).pipe(
      mergeMap(() => this.getClasses()),
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se actualizo la clase correctamente')
      )
    );
  }
}
