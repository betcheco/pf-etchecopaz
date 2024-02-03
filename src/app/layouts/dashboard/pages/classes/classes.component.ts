import { Component, OnInit } from '@angular/core';
import { Class } from './models';
import { ClassesService } from '../../../../core/services/classes.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent implements OnInit {
  classes: Class[]
  displayedColumns: string[] = ['id','teacher'];
  dataSource:Class[] = [];

  constructor(private classService: ClassesService) {
    this.classes = []
  }
  ngOnInit(): void {
    this.classService.getClasses().subscribe({
      next: (classes) => {
        console.log(classes)
        this.dataSource = classes
      }
    })
  }

}
