///<reference path="../../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { User } from '../../../shared/user interface/user';
import { Course } from '../../../shared/course';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  public users: User[];
  public myUserData: User = new User();
  constructor(private dataService: ApiConnectionService, private router: Router) { }
  public user: User = new User();
  public popUp_visible = false;
  local_users = [
    {user_id:1,email:"ioanmanolea@gmail.com", firstName: 'Popa', lastName:'Ion',password:'assist',active:1,resetToken:null,token:null,roles:[1],image:"https://static1.squarespace.com/static/5420ef1de4b0c6a70bc1f5fe/t/59c4c2cb4c0dbf55a1028508/1517565529276/Jeroen-Van-Dalen-%28circle-profile%29.png"},
    {user_id:2,email:"user@assist.ro", firstName: 'Elena', lastName:'asdq231',password:'assist',active:0,resetToken:null,token:null,roles:[1],image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTntK4khiDwVP2yQG-mQM5pf3_2QqwxYxQh9djWzIP75FSUyEoxA"},
    {user_id:3,email:"user@assist.ro", firstName: 'Vlad', lastName:'Ion',password:'assist',active:1,resetToken:null,token:null,roles:[0],image:"http://www.davidbrianethier.com/assets/profile-circle-f9942ae5a1b6c37af6a17536001a3be7.png"},
    {user_id:4,email:"user@assist.ro", firstName: 'Bianca', lastName:'asd',password:'assist',active:0,resetToken:null,token:null,roles:[1],image:"https://static1.squarespace.com/static/55ecec2ae4b048d1ed402671/t/59f2124b6957da699d44db7c/1516916749938/erica-circle-profile.png?format=500w"},
    {user_id:5,email:"user@assist.ro", firstName: 'Andrei', lastName:'Popovici',password:'assist',active:0,resetToken:null,token:null,roles:[0],image:"http://www.johndunham.com/wp-content/uploads/2015/04/jd_profile_circle-1.png"},
    {user_id:6,email:"user@assist.ro", firstName: 'Mihai', lastName:'asdasd',password:'assist',active:1,resetToken:null,token:null,roles:[0],image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrgvG-YyZu13VOTNhKSvr-xy2C5nO0zpJF_KAUEl7hc5rCjeE"},

  ];
  
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    // this.dataService.getAllUsers().subscribe((res:any) => {
    //   this.users = res.objects;
    // });
    this.dataService.getAllUsers().subscribe((res:any) => {
      this.users = this.local_users;
    });

    this.users = this.local_users;
  }
  
  registerUser() {
    this.dataService
      .registerUser(this.myUserData)
      .subscribe(res => this);
  }

  deleteUser(id, i) {
    this.dataService
      // .deleteUser(id)
      // .subscribe(res => {
        // var t = this.users.indexOf(this.users[i]);
        // this.users.splice(t, 1);
        var t = this.local_users.indexOf(this.local_users[i]);
        this.local_users.splice(t, 1);
      // });
  }

  updateUserProfile(): void {
    // this.dataService.updateUser(this.user.user_id, this.user).subscribe(res => {
    // });
  }

  updateUser() {
    this.dataService
      .updateUser(this.myUserData.user_id, this.myUserData)
      .subscribe(res => this);
  }


  delUser(index, i) {
    this.deleteUser(this.users[index].user_id, index);
  }

  changeRole(index, i) {
    this.user = this.users[index];
    let new_priv = this.users[index].roles[0] == 0 ? 1 : 0
    this.users[index].roles[0] = new_priv;
    this.updateUserProfile();
  }

  changeActive(index, i) {
    this.user = this.users[index];
    let new_active_state = this.users[index].active == 0 ? 1 : 0
    this.users[index].active = new_active_state;
    this.updateUserProfile();
  }

  popUpToggle(){
    this.popUp_visible = this.popUp_visible==false? this.popUp_visible=true:this.popUp_visible=false;
  }

}

