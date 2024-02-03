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
    SharedModule,
    RouterModule.forChild([
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'users',
        component:UsersComponent,
      },
      {
        path:'users/:id',
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
        path:'courses',
        component:CoursesComponent
      },
    ])
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
