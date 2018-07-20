///<reference path="../../../../node_modules/@angular/router/src/router.d.ts"/>
import {  Component, OnInit, ViewChild, Output } from '@angular/core';
import {User} from '../../shared/user interface/user';
import {Course} from '../../shared/course';
import { ApiConnectionService } from '../../services/api-connection/api-connection.service';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  public users: User[];
  public myUserData: User = new User();
  constructor(private dataService: ApiConnectionService, private router: Router) {}
  public user: User = new User();
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.dataService.getAllUsers().subscribe(res => {
      this.users = res;
    });
  }
  

  registerUser() {
    this.dataService
      .registerUser(this.myUserData)
      .subscribe(res => this);
     console.log(this.myUserData.last_name)
  }

  deleteUser(id,i) {
    this.dataService
      .deleteUser(id)
      .subscribe(res => 
      {
      //  this.splice(id, 1);
      var t = this.users.indexOf(this.users[i]);
      this.users.splice(t, 1);
        console.log("sters")
      });
  }

  updateUserProfile(): void {
    this.dataService.updateUser(this.user.id, this.user).subscribe(res => {
      console.log('updated');  
      console.log(this.user.id + " " + this.user.priv)
    });
  }

  updateUser(){
    this.dataService
      .updateUser(this.myUserData.id,this.myUserData)
      .subscribe(res => this);
  }

  
  delUser(index,i){
      this.deleteUser(this.users[index].id,index);
  }

  changePriv(index,i){
    this.user = this.users[index];
    let new_priv = this.users[index].priv ==0 ? 1 : 0
    this.users[index].priv = new_priv;
    this.updateUserProfile();
  }

  changeActive(index,i){
    this.user = this.users[index];
    let new_active_state = this.users[index].active ==0 ? 1 : 0
    this.users[index].active = new_active_state;
    this.updateUserProfile();
  }

}
