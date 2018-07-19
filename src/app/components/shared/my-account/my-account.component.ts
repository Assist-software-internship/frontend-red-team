///<reference path="../../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  onFileSelected(event) {
    console.log(event);
  }

  ngOnInit() {
  }
}

@Injectable()
export class AppSettingService {
  constructor(private http: HttpClient) {
    let obj;
    this.getJSON().subscribe(data => obj = data, error => console.log(error));
  }

  public getJSON(): Observable<any> {
    return this.http.get('./frontend-red-team/db.json');
      // .name((res: any) => res.json())
      // .catch((error: any) => console.log(error));
  }
}

// function AddUsername($scope) {
//
//   let existingEntries = JSON.parse(localStorage.getItem('http://localhost:3000/users'));
//   if (existingEntries == null) {
//     existingEntries = [];
//   }
//
//   const addUser = {
//     'id': $scope.addUser
//   };
//
//   existingEntries.push(addUser);
//   localStorage.setItem('http://localhost:3000/users', JSON.stringify(existingEntries));
//
//   const values = JSON.parse(localStorage.getItem('http://localhost:3000/users'));
//   users<String>
// }

// export class LogoutComponent implements OnInit {
//   constructor(private router: Router, authService: AuthService) {}
//   onLogOut() {
//     authService.logOut();
//     this.router.navigate(['./login']);
//   }
//     ngOnInit() {
//
//     }
// }
//   declare var angular: any;
//   const app = angular.module('app', []);
//   app.controller('MyController', ['$http', function ($http) {
//       const filecontent = 'Data',
//           that = this;
//       $http.get('db.json/users').success(function (data) {
//           that.content = data;
//       });
//       this.content = filecontent;
//   }]);
