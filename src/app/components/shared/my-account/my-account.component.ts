///<reference path="../../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/user interface/user';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  onFileSelected(event) {
    console.log(event);
  }

  // private datas: Course[];

  constructor(private dataService: ApiConnectionService) { }

  ngOnInit() {
  }
  // getAllUsers() {
  //   this.dataService.getAllUsers().subscribe(res => {
  //     this.users = res;
  //     console.log('Users ', this.users);
  //   });
  // }
}

// @Injectable()
// export class AppSettingService {
//   constructor(private http: HttpClient) {
//     let obj;
//     this.getJSON().subscribe(data => obj = data, error => console.log(error));
//   }
//
//   public getJSON(): Observable<any> {
//     return this.http.get('./frontend-red-team/db.json');
//       // .name((res: any) => res.json())
//       // .catch((error: any) => console.log(error));
//   }
// }

