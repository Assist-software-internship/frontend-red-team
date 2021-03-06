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

  public showHide = true;
  public showConfirmPassword = true;
  public myUserData: User = new User();
  public logUser: User = new User();
  public resetUser: User = new User();
  public message: String;
  public password_message = '';
  public confirm_password = '';

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
      .subscribe((res: any) => {
        console.log('res ', res);

        const token = res.message.split(':')[1];
        const success_message = res.success.toString();
        // const isAdmin = res.roles.name.toString();
        console.log('tip', typeof success_message);
        console.log('token ', token);
        // console.log('is admin= ', isAdmin);
        if (success_message === 'false') {
          this.password_message = 'Your email or password is invalid, try again!'
          this.router.navigate(['/login']);
        }
        else {
          localStorage.setItem('token', token);
          localStorage.setItem('email', this.logUser.email.toString());
          localStorage.setItem('success_message', success_message);
          this.router.navigate(['/dashboard']);
          window.location.reload();
          this.password_message = '';
        }

      }, (err) => {
        console.log(err);
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
  getUserByEmail() {

  }
}
