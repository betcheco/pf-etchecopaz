import { Component, OnInit } from '@angular/core';
import { Course } from './models';
import { CoursesService } from '../../../../core/services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  displayedColumns = ['id', 'name', 'classes', 'actions'];
  courses: Course[] = [];

  constructor(private coursesService: CoursesService,
    private router:Router) {}
  ngOnInit(): void {
    this.getCourses();
  }

  onDelete(id: number) {
    this.coursesService.deleteCourse(id).subscribe({
      next: (value) => {
        this.courses = value;
      },
    });
  }
  onEdit(id: number) {
    this.router.navigate([ 'dashboard/courses/' + id])
  }

  private getCourses() {
    this.coursesService.getCourses().subscribe({
      next: (value) => {
        this.courses = value;
      },
    });
  }
}
