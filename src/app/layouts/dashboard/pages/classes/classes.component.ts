import { Component, OnInit } from '@angular/core';
import { ClassRoom } from './models';
import { ClassesService } from '../../../../core/services/classes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent implements OnInit {

  classes: ClassRoom[] = []
  displayedColumns: string[] = ['id','teacher', "students", "actions"];

  constructor(private classService: ClassesService, private router:Router) {}

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

  onEdit(pClass: ClassRoom) {
    this.router.navigate(['dashboard','classes',pClass.id])
  }
  

  
}