import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from '../../../classes/models';
import { ClassesService } from '../../../../../../core/services/classes.service';
import { CoursesService } from '../../../../../../core/services/courses.service';
import { Course } from '../../models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {
courseFormGroup: FormGroup;
onSubmit() {
throw new Error('Method not implemented.');
}
onCancel() {
throw new Error('Method not implemented.');
}
  courseId : string | null = '0';
  course: Course = { id: 0, classes: [], name: '' };
  classes : Class[] = [];

  constructor(private router:Router,
    private route: ActivatedRoute,
    private classService: ClassesService,
    private courseService: CoursesService,
    private formBuilder: FormBuilder){

      this.courseFormGroup = this.formBuilder.group({
        courseName: this.formBuilder.control(this.course.name, [ Validators.required, Validators.minLength(3) ] )
      })
      
    }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    if (this.courseId == '0' || null) {
      this.getClasses();
    } else {
      this.courseService.getCourseById(Number(this.courseId)).subscribe({
        next:(value) => {
          this.course = value[0];
          this.classes = this.course.classes;
        },
      })
    }
  }

  private getClasses(){
    this.classService.getClasses().subscribe({
      next:(value) => {
        this.classes = value;
      },
    })
  }
}
