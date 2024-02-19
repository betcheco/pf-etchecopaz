import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassRoom } from '../../../classes/models';
import { ClassesService } from '../../../../../../core/services/classes.service';
import { CoursesService } from '../../../../../../core/services/courses.service';
import { Course } from '../../models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Role } from '../../../users/models';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {
refrescar() {
  this.course.classes.push({id: 2,
  teacher: {
    id: 4,
    firstName: "Kakashi",
    lastName: "Hatake",
    email: "kaha@gmail.com",
    password: "",
    role: Role.TEACHER
  },
  "students": []})
}
courseFormGroup: FormGroup;
onSubmit() {
  console.log(this.courseFormGroup.value)
}
onCancel() {
  this.router.navigate(['dashboard','courses'])
}
  courseId : string | null = '0';
  course: Course = { id: 0, classes: [], name: '' };
  classes : ClassRoom[] = [];

  constructor(private router:Router,
    private route: ActivatedRoute,
    private classService: ClassesService,
    private courseService: CoursesService,
    private formBuilder: FormBuilder){
      this.getClasses();
      this.courseFormGroup = this.formBuilder.group({
        name: this.formBuilder.control(this.course.name, [ Validators.required, Validators.minLength(3) ] ),
        classes: this.formBuilder.control(this.course.classes)
      })
      
    }


  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    if (this.courseId == '0' || null) {
      
    } else {
      this.courseService.getCourseById(Number(this.courseId)).subscribe({
        next:(value) => {
          console.log(this.course)
          console.log(value)
          this.course = value;
          this.courseFormGroup.patchValue(value)
          this.courseFormGroup.controls['classes'].setValue(this.course.classes)
         
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

  compareClasses(p1:ClassRoom, p2: ClassRoom): boolean {
    if (p1 && p2) {
      return p1.id === p2.id;
    }
    return false;
  }
}
