import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {
  courseId : string | null = '0';
  constructor(private router:Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
  }


}
