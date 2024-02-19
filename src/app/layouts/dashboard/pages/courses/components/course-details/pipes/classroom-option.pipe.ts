import { Pipe, PipeTransform } from '@angular/core';
import { ClassRoom } from '../../../../classes/models';

@Pipe({
  name: 'classroomOption'
})
export class ClassroomOptionPipe implements PipeTransform {

  transform(value: ClassRoom): string {

    return value.id + ' - ' + value.teacher.lastName;
  }

}
