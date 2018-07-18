import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/user interface/user';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('login') loginForm: NgForm;
  @ViewChild('reset') resetForm: NgForm;
  @ViewChild('create') createForm: NgForm;

  private users: User[];
  
  private myUserData: User = {
    active: 1,
    name: '',
    last_name: '',
    email: '',
    password: ''
  };
  constructor(private dataService: ApiConnectionService) { }

  public loginContent = true;
  public resetContent = false;
  public registerContent = false;

  ngOnInit() {
    this.getAllUsers();
  }

  onSignin( ){
    
    console.log(this.loginForm.value);
    this.loginForm.reset();
    
  }

  getAllUsers() {
    this.dataService.getAllUsers().subscribe(res => {
      this.users = res;
      console.log('Users ', this.users);
    });
  }

  manageForms(login:boolean, register: boolean, reset: boolean ): void {
    this.loginContent = login;
    this.registerContent = register;
    this.resetContent = reset;
    
  };

  registerUser() {
    this.myUserData.email = this.createForm.value.email_register;
    this.myUserData.password = this.createForm.value.password_register;
    this.myUserData.name = this.createForm.value.first_name;
    this.myUserData.last_name = this.createForm.value.last_name;
    this.dataService
      .registerUser(this.myUserData)
      .subscribe(res => this.manageForms(true,false,false));
  }
}
