import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgContentComponent } from './ng-content/ng-content.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormArray,FormBuilder ,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgContentComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  formbuilder=inject(FormBuilder);
 
  login=this.formbuilder.group({
    fname:['', [Validators.required]],
    lname:['', [Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(7),Validators.pattern('[a-z]+')]],
    passwordvisible:['', [Validators.required]],
    dob:['', [Validators.required]],
  address:this.formbuilder.array([
    this.formbuilder.group({
      address:['', [Validators.required]],
      phone:['', [Validators.required]],
    })
  ])
  });
  // login = new FormGroup({
  //   fname: new FormControl('', [Validators.required]),
  //   lname: new FormControl('', [Validators.required]),
  //   email: new FormControl('',[Validators.required, Validators.email]),
  //   password: new FormControl('',[Validators.required, Validators.minLength(7),Validators.pattern('[a-z]+')]),
  //   passwordvisible:new FormControl(''),
  //   dob: new FormControl(''),
  //   add: new FormArray([
  //     new FormGroup(
  //       {
  //         phno:new FormControl('',[Validators.required]),
  //         address:new FormControl('')

  //       }
  //     )])
     

  // });

  getAddressFromArray() {
    return this.login.get('address') as FormArray;
  }

  controltoAddress() {
    this.getAddressFromArray().push(new FormControl('address'));
  }
  removeAdress(i: number) {
    this.getAddressFromArray().removeAt(i);
  }
 
 

  controlSubmit() {
    if (this.login.invalid) window.alert('please enter correct credentials');
    console.log(this.login.value);
    console.log(this.login.valid);
  }
}
