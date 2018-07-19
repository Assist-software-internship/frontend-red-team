import { Component, OnInit, ViewChild } from '@angular/core';
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



  public myUserData: User = new User();
  public logUser: User = new User();
  public message: String;
  //to be removed
  //public user:User = new User();

  constructor(private dataService: ApiConnectionService, private router:Router) { }


  public loginContent = true;
  public resetContent = false;
  public registerContent = false;

  ngOnInit() {
    // this.getAllUsers();
    
    //this.getUserProfile();
  }

  onReset(){

  }

  manageForms(login: boolean, register: boolean, reset: boolean ): void {
    this.loginContent = login;
    this.registerContent = register;
    this.resetContent = reset;
  }

  registerUser() {
    this.dataService
      .registerUser(this.myUserData)
      .subscribe(res => this.manageForms(true, false, false));
  }

  loginUser(): void {
    this.dataService.fakeLogin(this.logUser.email, this.logUser.password).subscribe(res => {
      console.log('response ', res);
      if(res.length > 0) {
        console.log('User is now logged in');
        this.router.navigate(['/dashboard']);
      } else {
        this.message = 'User invalid!'
        console.log('User not found.');
        
      }
      
    })
  };

  // getUserProfile(): void {
  //   this.dataService.getUserById(1).subscribe(res => {
  //     this.user = res;
  //     console.log('logged user ', this.user)
  //   })
  // }
}
