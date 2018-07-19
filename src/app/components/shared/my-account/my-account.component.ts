///<reference path="../../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Course, User} from '../../../shared/user interface/user';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  public course: Course[];
  private users: User[];

  public myUserData: User = {
    active: 1,
    name: '',
    last_name: '',
    email: '',
    password: '',
  };

  public myCourse: Course = {
  small_description: '',
  long_description: '',
  tags: '',
  images: '',
};

  onFileSelected(event) {
    console.log(event);
  }

  constructor(private dataService: ApiConnectionService) {
  }


    ngOnInit() {
      this.dataService.getAllCourse().subscribe(res => {
        this.course = res;
        console.log('Course ', this.course);

      });
      this.dataService.getAllUsers().subscribe(res => {
        this.users = res;
        console.log('Users ', this.users);
      });
  }
}


