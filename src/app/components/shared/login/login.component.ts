import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/user interface/user';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('login') loginForm: NgForm;
  @ViewChild('reset') resetForm: NgForm;
  @ViewChild('create') createForm: NgForm;

  showHide = true;
  showConfirmPassword = true;
  public myUserData: User = new User();
  public logUser: User = new User();
  public resetUser: User = new User();
  public message: String;
  password_message = '';
  confirm_password = '';

  constructor(
    private dataService: ApiConnectionService,
    private router: Router
  ) { }

  public loginContent = true;
  public resetContent = false;
  public registerContent = false;

  ngOnInit() {

  }

  showMyPass() {
    this.showHide = !(this.showHide);
  }
  showMyConfirmPass() {
    this.showConfirmPassword = !(this.showConfirmPassword);
  }
  onReset() {
    this.resetPassword();
  }
  manageForms(login: boolean, register: boolean, reset: boolean): void {
    this.loginContent = login;
    this.registerContent = register;
    this.resetContent = reset;
  }

  registerUser() {
    this.dataService
      .registerUser(this.myUserData)
      .subscribe(res => this.manageForms(true, false, false));
  }
  loginUser() {
    this.dataService
      .loginUser(this.logUser)
      .subscribe(res => {
        this.router.navigate(['/dashboard']);
        localStorage.setItem('email', res[0].email);
      });
  }

  // reset password
  resetPassword(): void {
    if (this.resetUser.password != this.confirm_password) {
      this.password_message = 'Password not match';
    }
    else {
      this.dataService
        .resetPassword(this.resetUser)
        .subscribe(res => {
          console.log('password updated ', res);
          this.manageForms(true, false, false)
        });
    }

  }
}
