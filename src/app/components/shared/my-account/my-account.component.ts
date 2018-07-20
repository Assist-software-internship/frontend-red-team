///<reference path="../../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../../../shared/user interface/user';
import {Course} from '../../../shared/course';

import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  public courses: Course[];
  @Output()
  public user: User = new User();
  public showPassword = false;
  public logUser: User = new User();

  constructor(private dataService: ApiConnectionService, private router: Router) {
  }

  
    ngOnInit() {
     this.getAllCourses();
    }

    ngAfterViewInit() {
      this.getUserProfile();

    }

    onLogOut() {
      localStorage.removeItem('id');
      this.router.navigate(['/login']);
    }

    loginUser(): void {
      this.dataService.fakeLogin(this.logUser.email, this.logUser.password).subscribe(res => {
        this.user = res[0];
        localStorage.setItem('id', JSON.stringify(1));
      })
    };

    getUserProfile(): void {
      this.dataService.getUserById(parseInt(localStorage.getItem('id'))).subscribe(res => {
        this.user = res[0];
        console.log('Users ', this.user);
      });
    }

    updateUserProfile(): void {
      this.dataService.updateUser(this.user.id, this.user).subscribe(res => {
        console.log('updated');  
      });
    }

    getAllCourses() {
      this.dataService.getAllCourse().subscribe(res => {
        this.courses = res;
        console.log('Course ', this.courses);
      });
    }
    toggleShowPassword(){
        this.showPassword === false ? this.showPassword = true : this.showPassword = false;
    }
}


