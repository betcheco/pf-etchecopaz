import { Component, OnInit } from '@angular/core';
import { Class } from './models';
import { ClassesService } from '../../../../core/services/classes.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent implements OnInit {

  classes: Class[] = []
  displayedColumns: string[] = ['id','teacher', "students", "actions"];

  constructor(private classService: ClassesService) {}

  ngOnInit(): void {
    this.getClasses()
  }

  getClasses(){
    this.classService.getClasses().subscribe({
      next: (classes) => {
        this.classes = classes
      }
    })
  }

  onDelete(id: number) {
  this.classService.deleteClass(id).subscribe({
    next:(newClasses) => {
      this.classes = newClasses
    }})
  }

  onEdit(pClass: Class) {
  this.classService.updateClass(pClass).subscribe({
    next:(newClasses) => {
      this.classes = newClasses
    }})
  }
  

  
}