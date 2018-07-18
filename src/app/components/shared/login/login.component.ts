import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('login') loginForm: NgForm;
  @ViewChild('reset') resetForm: NgForm;
  @ViewChild('create') createForm: NgForm;

  constructor() { }

  public loginContent = true;
  public resetContent = false;
  public registerContent = false;

  ngOnInit() {
  }

  onSignin( ){
    
    console.log(this.loginForm.value);
    this.loginForm.reset();
    
  }
  onReset(){
    console.log(this.resetForm);
    
  }

  onRegister(){

    const email = this.createForm.value.email_log;
    const first_name = this.createForm.value.first_name;
    const last_name = this.createForm.value.last_name;
    const active = 2;
    const user = [{
      email: email,
      name: first_name,
      last_name: last_name,
      active: active
    }];

    console.log(this.createForm);
    console.log(user);
  }
  changeSignup(){
    this.registerContent = true;
    this.loginContent = false;
  }
  onResetPage(){
    this.resetContent = true;
    this.loginContent = false;
    this.registerContent = false;
  }
}
