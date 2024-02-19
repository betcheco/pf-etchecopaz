import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ClassesComponent } from './pages/classes/classes.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { UsersComponent } from './pages/users/users.component';
import { MatListModule } from '@angular/material/list';
import { DetailsComponent } from './pages/users/components/details/details.component';
import { ClassesModule } from './pages/classes/classes.module';
import { CoursesModule } from './pages/courses/courses.module';
import { CourseDetailsComponent } from './pages/courses/components/course-details/course-details.component';
import { ClassDetailsComponent } from './pages/classes/components/class-details/class-details.component';
import { adminGuard } from '../../core/guards/admin.guard';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    UsersModule,
    ClassesModule,
    CoursesModule,
    SharedModule,
    RouterModule.forChild([
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'users',
        canActivate: [adminGuard],
        component:UsersComponent,
      },
      {
        path:'users/:id',
        canActivate: [adminGuard],
        component:DetailsComponent
      },
      {
        path:'students',
        component:StudentsComponent
      },
      {
        path:'classes',
        component:ClassesComponent
      },
      {
        path:'classes/:id',
        component: ClassDetailsComponent
      },
      {
        path:'courses',
        component:CoursesComponent
      },
      {
        path:'courses/:id',
        component:CourseDetailsComponent
      },
    ])
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
