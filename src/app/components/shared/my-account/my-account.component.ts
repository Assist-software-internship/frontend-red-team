import { Component, OnInit, ViewChild, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/user interface/user';
import { Course } from '../../../shared/course';

import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { FileUploader } from 'ng-file-upload';
import { EventEmitter } from 'events';
import { isNgTemplate } from '@angular/compiler';
import { userInfo } from 'os';
// import { base64textString } from 'angular-base64-download';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  public courses: Course[];
  public users: User[];
  private wholeName: string;
  @Output()
  public user: User = new User();
  public showPassword = false;
  public logUser: User = new User();
  // public uploader: FileUploader;
  private hasDragOver = false;
  selectedFile = null;
  public firstload = true;
  showHide = true;
  public file: File;

  constructor(private dataService: ApiConnectionService, private router: Router, private http: HttpClient) {
  }


  localStorage
  ngOnInit() {
    this.getAllCourses();
    this.firstload = false;

  }

  ngAfterViewInit() {
    this.getUserProfile();

  }

  onLogOut() {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('success_message');
    this.router.navigate(['/login']);
  }

  getUserProfile(): void {
    this.dataService.getUserByEmail(localStorage.getItem('email')).subscribe((res: any) => {
      console.log('res ', res)
      this.user = res.objects[0];
      this.wholeName = this.user.firstName + ' ' + this.user.lastName;
      console.log('Users::: ' + this.user.firstName + this.user.lastName);
    });
  }
  splitName(event) {
    // if (event.getLength > 20  || event.indexOf(' ') > 0)
    //let name = event.split(' ');

    this.user.firstName = name[0];
    this.user.lastName = name[1];
    console.log("asdas: " + this.user.firstName + this.user.lastName);
    if (this.user.firstName.length < 1)
      console.log("");
    // if(this.user.lastName == "")

  }

  showMyPass() {
    this.showHide = !(this.showHide);
  }

  updateCourseProgress(item: Course) {
    item.points = 0;
    console.log('item ', item)
    this.dataService.updateCourseProgress(item.id, item).subscribe(res => {
      console.log('points updated , res');
    });
  }

  updateUserProfile(): void {
    let splitLength = false;
    this.user.firstName = this.wholeName.split(' ')[0];
    this.user.lastName = this.wholeName.split(' ')[1];
    if (this.wholeName.split.length > 2) {
      splitLength = true;
    }
    console.log(this.user);
    this.dataService.updateUser(this.user.user_id, this.user).subscribe(res => {
      console.log('updated');
    });
    // this.updatePassword();
  }
  updatePassword(): void {
    this.dataService.updatePassword(this.user.password, this.user).subscribe(res => {
      console.log('password updated');
    })
  }

  getAllCourses() {

    this.dataService.getAllCourses().subscribe(res => {
      this.courses = res;
      console.log('Course ', this.courses);

    });
  }
  toggleShowPassword() {
    this.showPassword === false ? this.showPassword = true : this.showPassword = false;
  }

  onFileSelected(event) {
    console.log(event.srcElement.value);
    this.selectedFile = <File>event.target.files[0];

  }
  // onUpload(fd: String) {
  //   fd = './assets/images.png';
  //   // fd.append('./assets/images.png', this.selectedFile);
  //   // this.http.post('./assets/images.png', fd)
  //   //   .subscribe(res => {
  //   //     console.log(res);
  //   //   });
  //   console.log("the image: " + fd);
  // }
  handleFileSelect(evt) {
    var files = evt.target.files;
    this.file = files[0];
    console.log(this.file);

    if (files && this.file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(this.file);
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    binaryString = btoa(binaryString);
    console.log(btoa(binaryString));
  }
}


