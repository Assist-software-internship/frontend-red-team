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
import { base64textString } from 'angular-base64-download';

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
  public firstload=true;

  constructor(private dataService: ApiConnectionService, private router: Router, private http: HttpClient) {
  }

    
  localStorage
    ngOnInit() {
     this.getAllCourses();
     this.dataService.getUserByEmail(localStorage.getItem('email')).subscribe(res => {
      this.user = res[0];
      this.wholeName = res[0].firstName + ' ' + res[0].lastName;
      console.log("S-au salvat datele");
     });
   
     this.firstload=false;

    }

    ngAfterViewInit() {
      this.getUserProfile();

    }

    onLogOut() {
      localStorage.removeItem('id');
      this.router.navigate(['/login']);
    }

    getUserProfile(): void {
      this.dataService.getUserByEmail(localStorage.getItem('email')).subscribe(res => {
        this.user = res[0];
        console.log('Users::: '+ this.user.firstName + this.user.lastName);
      });
    }
    splitName(event) {
        // if (event.getLength > 20  || event.indexOf(' ') > 0)
           //let name = event.split(' ');
        
        this.user.firstName = name[0];
        this.user.lastName = name[1];
        console.log("asdas: " + this.user.firstName + this.user.lastName);
        if(this.user.firstName.length < 1)
          console.log("");
        // if(this.user.lastName == "")

    }

    updateCourseProgress(item: Course){
      item.points = 0;
      console.log('item ', item)
      this.dataService.updateCourseProgress(item.id, item).subscribe(res => {
        console.log('points updated , res');
      });
    }

    updateUserProfile(): void {
      const firstName = this.wholeName.split(' ')[0];
      const lastName = this.wholeName.split(' ')[1];
      let invalidUsername = false;
      if(firstName.length < 1){
        invalidUsername = true;
      }
      console.log('first', firstName, 'last', lastName);
      this.dataService.updateUser(this.user.user_id, this.user).subscribe(res => {
        console.log('updated');  
      });
    }

    getAllCourses() {

      this.dataService.getAllCourses().subscribe(res => {
        this.courses = res;
        console.log('Course ', this.courses);

      });
    }
    toggleShowPassword(){
        this.showPassword === false ? this.showPassword = true : this.showPassword = false;
    }

    onFileSelected(event) {
      console.log(event.srcElement.value);
      this.selectedFile = <File>event.target.files[0];
    }
    onUpload() {
      const fd = new FormData();
      fd.append('image', this.selectedFile.this.selectedFile.name);
      this.http.post('./assets/images.png', fd)
      .subscribe(res => {
        console.log(res);
      });
    }
    handleFileSelect(evt){
      var files = evt.target.files;
      var file = files[0];

    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }
    _handleReaderLoaded(readerEvt) {
          var binaryString = readerEvt.target.result;
          binaryString= btoa(binaryString);
          console.log(btoa(binaryString));
      }
}


