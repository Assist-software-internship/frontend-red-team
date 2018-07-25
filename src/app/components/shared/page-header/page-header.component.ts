///<reference path="../../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../../../shared/user interface/user';
import {Course} from '../../../shared/course';

import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Router, Route, RoutesRecognized } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';

import {ElementRef,Renderer2} from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})


export class PageHeaderComponent implements OnInit {

  public currentRoute

  @Output()
  public user: User = new User();

  constructor(router: Router,private dataService: ApiConnectionService) { 
    router.events.subscribe((url:any) => console.log(url));
    this.currentRoute = router.url;
    // console.log(router.url);  // to print only path eg:"/login"
    console.log(this.currentRoute);
    if( this.currentRoute == "/dashboard" ){
      
    }


  }

  
  public visible = false;
  toggle(){
   
    if (this.visible){
      document.getElementById('right').style.display = "none";
      this.visible = false;
    }else{
      document.getElementById('right').style.display = "flex";
      this.visible = true;
    }

  }

  ngOnInit() { 
    // console.log(RoutesRecognized.)
  }

  getRoute(){
    return window.location.pathname;
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

  onFileSelected(event) {
    console.log(event.srcElement.value);
    this.user.image = event.srcElement.value;
  }  

}
