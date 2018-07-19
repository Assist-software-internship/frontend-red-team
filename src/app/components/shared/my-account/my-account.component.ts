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
  public course: Course[];
  @Output()
  public user: User = new User();

  constructor(private dataService: ApiConnectionService, private router: Router) {
  }

  
    ngOnInit() {
     this.getAllCourses();
    }

    ngAfterViewInit() {
      this.getUserProfile();

    }

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
      this.dataService.getAllCourses().subscribe(res => {
        this.course = res;
        console.log('Course ', this.course);
      });
    }
}


