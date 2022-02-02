import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      username : ["" , Validators.required],
      firstname: ["" , Validators.required],
      lastname: [""],
      email : ["" ,[ Validators.required , Validators.email]],
      mobilenum: ["" ,[ Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      dob: ["" ,[ Validators.required ]],
      password : ["" , Validators.required],
      gender:["" , Validators.required]
    });
  }

}
