///<reference path="../../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { User } from '../../../shared/user interface/user';
import { Course } from '../../../shared/course';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';


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
  public local_users = [
    {user_id:1,email:"ioanmanolea@gmail.com", firstName: 'Constantin', lastName:'Dalan',password:'assist',active:1,resetToken:null,token:null,roles:[1],image:"https://static1.squarespace.com/static/5420ef1de4b0c6a70bc1f5fe/t/59c4c2cb4c0dbf55a1028508/1517565529276/Jeroen-Van-Dalen-%28circle-profile%29.png"},
    {user_id:2,email:"user@assist.ro", firstName: 'Elena', lastName:'Baciu',password:'assist',active:0,resetToken:null,token:null,roles:[1],image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTntK4khiDwVP2yQG-mQM5pf3_2QqwxYxQh9djWzIP75FSUyEoxA"},
    {user_id:3,email:"user@assist.ro", firstName: 'Vlad', lastName:'Begu',password:'assist',active:1,resetToken:null,token:null,roles:[0],image:"http://www.davidbrianethier.com/assets/profile-circle-f9942ae5a1b6c37af6a17536001a3be7.png"},
    {user_id:4,email:"user@assist.ro", firstName: 'Bianca', lastName:'Safer',password:'assist',active:0,resetToken:null,token:null,roles:[1],image:"https://static1.squarespace.com/static/55ecec2ae4b048d1ed402671/t/59f2124b6957da699d44db7c/1516916749938/erica-circle-profile.png?format=500w"},
    {user_id:5,email:"user@assist.ro", firstName: 'Andrei', lastName:'Popovici',password:'assist',active:0,resetToken:null,token:null,roles:[0],image:"http://www.johndunham.com/wp-content/uploads/2015/04/jd_profile_circle-1.png"},
    {user_id:6,email:"user@assist.ro", firstName: 'Laura', lastName:'Anghel',password:'assist',active:1,resetToken:null,token:null,roles:[0],image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrgvG-YyZu13VOTNhKSvr-xy2C5nO0zpJF_KAUEl7hc5rCjeE"},

  ];
  
  public editUser = [] ;
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    // this.dataService.getAllUsers().subscribe((res:any) => {
    //   this.users = res.objects;
    // });
    this.dataService.getAllUsers().subscribe((res: any) => {
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

  popUpToggle(user){
    this.popUp_visible = this.popUp_visible==false? this.popUp_visible=true:this.popUp_visible=false;
    this.editUser = [];
    
    // this.editUser.push({user_id:user.user_id,profile:user.image,fName:user.firstName,lName:user.lastName,email:user.email})


    this.editUser.push({user_id:user.user_id,email:user.email, firstName: user.firstName, lastName:user.lastName,password:user.password,active:user.active,resetToken:null,token:null,roles:user.roles,image:user.image},
  )

  }

  saveUser(){
   
 

    for (let index = 0; index < this.local_users.length; index++) {
      const element = this.local_users[index];
      if (element.user_id == this.editUser[0].user_id) {
        this.local_users[index] = this.editUser[0]

        console.log(this.editUser[0].firstName)
        // this.local_users.splice(this.local_users.indexOf(element), 1);
        // this.notificationPush("Chapter " + element.chapter + " was deleted", "red")
      }
    }
 
}
}
