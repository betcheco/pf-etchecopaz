import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { type User} from '../../models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  hide = true;
  userFormGroup: FormGroup;

  @Input()
    user:User = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: null
    }

  @Output()
  onSubmitEvent = new EventEmitter<User>();

  constructor(private formBuilder: FormBuilder) {
   this.userFormGroup = this.formBuilder.group({
      firstName: this.formBuilder.control(this.user.firstName, [ Validators.required, Validators.minLength(3) ] ),
      lastName:this.formBuilder.control(this.user.lastName, [ Validators.required,Validators.minLength(3) ]),
      email:this.formBuilder.control(this.user.email, [ Validators.required, Validators.email ]),
      password:this.formBuilder.control(this.user.password)
    })
  }

  onSubmit():void {
    console.log("on submit")
    // if (this.userFormGroup.invalid){
    //   this.userFormGroup.markAllAsTouched()
    //   return
    // } else {
      this.onSubmitEvent.emit(this.userFormGroup.value)
      this.userFormGroup.reset()
    // }

  }

  getErrorMessage(formControlName:string):string {
    const form = this.userFormGroup.get(formControlName);
    if (form){
      if (form.hasError('required')) {
        return 'Debes ingresar un valor';
      }
      if (form.hasError('email')) {
        return 'El email no es valido'
      }
      if (form.hasError('minlength')) {
        return 'Debes ingresar al menos 3 caracteres'
      }
    } 
      return ''
    
  }

}