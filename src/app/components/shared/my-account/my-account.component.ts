import { Component, OnInit, ViewChild, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../../../shared/user interface/user';
import {Course} from '../../../shared/course';

import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FileUploader } from 'ng-file-upload';
import { EventEmitter } from 'events';

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
  public uploader: FileUploader;
  private hasDragOver = false;


  constructor(private dataService: ApiConnectionService, private router: Router) {
  }

  localStorage
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

    updateCourseProgress(item: Course){
      item.points = 0;
      console.log('item ', item)
      this.dataService.updateCourseProgress(item.id, item).subscribe(res => {
        console.log('points updated , res');
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

    // @Input()
    // private url = '';

    // @Output()
    // private urlChange = new EventEmitter();

    // setDefaultProfilePicture(){
    //   this.uploader = new FileUploader({
    //     url: 'assets/default.jpg',
    //     disableMultipart: false,
    //     autoUpload: true
    //   });
    // }

    // getProfilPicture(){
    //   this.uploader.response.subscribe(res=> {
    //     this.url = 'images.jpeg' + JSON.parse(res).id;
    //     this.urlChange.emit(this.url);
    //   });
    // }
    // public fileOver(e: any): void {
    //   this.hasDragOver = e;
    // }
}


