import { Component, OnInit } from '@angular/core';
import { Validators , FormBuilder , FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;

  constructor ( private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.loginform = this.formBuilder.group({
      email : ["" ,[ Validators.required , Validators.email]],
      password : ["" , Validators.required],
    });
  }

}
