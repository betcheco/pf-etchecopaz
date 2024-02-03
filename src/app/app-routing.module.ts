import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { UsersComponent } from './layouts/dashboard/pages/users/users.component';
import { StudentsComponent } from './layouts/dashboard/pages/students/students.component';
import { ClassesComponent } from './layouts/dashboard/pages/classes/classes.component';
import { CoursesComponent } from './layouts/dashboard/pages/courses/courses.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./layouts/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path:'**',
    redirectTo:'/dashboard'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
