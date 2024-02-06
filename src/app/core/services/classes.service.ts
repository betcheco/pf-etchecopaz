import { Injectable } from '@angular/core';
import { Class } from '../../layouts/dashboard/pages/classes/models';
import {  debounceTime, of, tap } from 'rxjs';
import { AlertsService } from './alerts.service';

let MOCK_CLASSES:Class[] = [
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
  constructor(private alerts: AlertsService) { }

  getClasses(){
    return of(MOCK_CLASSES).pipe(debounceTime(1000));
  }

  addClass(newClass:Class){
    MOCK_CLASSES.push(newClass);
    return this.getClasses().pipe(
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se agrego la clase correctamente')
      )
    );
  }

  deleteClass(id:number){
    MOCK_CLASSES = MOCK_CLASSES.filter((c) => c.id != id)
    return this.getClasses().pipe(
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se elimino la clase correctamente')
      )
    );
  }

  updateClass(newClass:Class){
    MOCK_CLASSES = MOCK_CLASSES.map( (c) => c.id === newClass.id ? { ...c, ...newClass } : c )
    return this.getClasses().pipe(
      tap(() =>
        this.alerts.showSuccess('Realizado', 'Se actualizo la clase correctamente')
      )
    );
  }
}
