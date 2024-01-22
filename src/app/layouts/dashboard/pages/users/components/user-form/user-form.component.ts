import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role, type User} from '../../models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class  UserFormComponent implements OnChanges{
  @Input()
  showForm = false;
  userFormGroup: FormGroup;

  @Input()
    user:User = {
      id: 0,
      firstName: 'Juan',
      lastName: '',
      email: '',
      password: '',
      role: null
    }

    roleList = [
      Role.ADMIN,
      Role.STUDENT,
      Role.TEACHER
    ]

  @Output()
  onSubmitEvent = new EventEmitter<User>();

  constructor(private formBuilder: FormBuilder) {
    console.log("constructor user-form - ", this.user)
   this.userFormGroup = this.formBuilder.group({
      firstName: this.formBuilder.control(this.user.firstName, [ Validators.required, Validators.minLength(3) ] ),
      lastName:this.formBuilder.control(this.user.lastName, [ Validators.required,Validators.minLength(3) ]),
      email:this.formBuilder.control(this.user.email, [ Validators.required, Validators.email ]),
      role:this.formBuilder.control(this.user.role, Validators.required )
    })
  }


  onSubmit():void {
    if (this.userFormGroup.invalid){
      this.userFormGroup.markAllAsTouched()
      return
    } else {
      this.onSubmitEvent.emit({ ...this.userFormGroup.value, id:0 , password: (Math.random() + 1).toString(36)} )
      this.userFormGroup.reset()
      this.userFormGroup.markAsUntouched()
    }

  }

  ngOnChanges( changes: SimpleChanges ){

    console.log(changes)

    if (changes['user']) {
      this.userFormGroup.patchValue(changes['user'].currentValue)
    }
  
    if (changes['showForm']) {
      this.showForm = changes['showForm'].currentValue
    }
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
