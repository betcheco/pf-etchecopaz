import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../../../../../../core/services/classes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Role, User } from '../../../users/models';
import { UsersService } from '../../../../../../core/services/users.service';
import { ClassRoom } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrl: './class-details.component.scss',
})
export class ClassDetailsComponent implements OnInit {
  classRoomId = "0"
  teachers: User[] = [];
  classRoomFormGroup: FormGroup;
  displayedColumns = ['name', 'actions'];
  classRoom: ClassRoom = {
    id: 0,
    teacher: {
      id: 0,
      firstName: '',
      lastName: '',
      password: '',
      role: Role.TEACHER,
      email: '',
    },
    students: [],
  };
  
  constructor(
    private classService: ClassesService,
    private route:ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private formBuilder:FormBuilder
    ) {
      this.classRoomFormGroup = this.formBuilder.group({
        teacher: this.formBuilder.control(this.classRoom.teacher, [Validators.required])
      })
    }
    
    ngOnInit(): void {
      this.classRoomId = this.route.snapshot.paramMap.get('id')!;
      this.userService.getUsers().subscribe({
        next: (value) => {
          this.teachers = value.filter((user) => user.role === Role.TEACHER);
        },
      });
      if (this.classRoomId == '0' || null) {
        
      } else {
        this.classService.getClassById(this.classRoomId).subscribe({
          next: (value) => {
            this.classRoom = value
            this.classRoomFormGroup.patchValue(value);
          }
        })
      }
    }
    
    onSubmit() {
      if (this.classRoom.id === 0) {
      } else {
        this.classService.updateClass({...this.classRoom, teacher:this.classRoomFormGroup.value.teacher}).subscribe({
          next: (newClasses) => {
            this.router.navigate(['dashboard','classes']);
          },
        });
      }
    }
    
    onCancel() {
      this.router.navigate(['dashboard', 'classes']);
    }
    onDelete(id: number) {
      const newStudents = this.classRoom.students.filter((student) => student.id !== id)
      this.classRoom.students = newStudents
    }
    
    compareTeacher(p1: User, p2: User): boolean {
      if (p1 && p2) {
        return p1.id === p2.id;
    }
    return false;
  }
}
