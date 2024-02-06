import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../layouts/dashboard/pages/users/models';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(user: User): string {
    return user.firstName + " " + user.lastName;
  }

}
