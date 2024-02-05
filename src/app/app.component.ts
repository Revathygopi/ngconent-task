import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgContentComponent } from './ng-content/ng-content.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormArray,
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
  login = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(7),Validators.pattern('[a-z]+')]),
    passwordvisible:new FormControl(''),
    dob: new FormControl(''),
    add: new FormArray([
      new FormGroup(
        {
          phno:new FormControl('',[Validators.required]),
          address:new FormControl('')

        }
      )])
     

  });

  getAddressFromArray() {
    return this.login.get('add') as FormArray;
  }

  controltoAddress() {
    this.getAddressFromArray().push(new FormControl('add'));
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
