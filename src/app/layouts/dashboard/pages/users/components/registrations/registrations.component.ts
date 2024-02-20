import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { ClassRoom } from '../../../classes/models';
import { ClassesService } from '../../../../../../core/services/classes.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.scss'
})
export class RegistrationsComponent {
displayedColumns = ['id', 'teacher'];
classes: ClassRoom[] = [];

constructor(private classesService:ClassesService){
 this.getClasses()
}

private getClasses(){
  this.classesService.getClasses().subscribe({
    next: (value) => {
      this.classes = value
    }
  })
}

}
