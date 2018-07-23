///<reference path="../../../../../node_modules/@angular/router/src/router.d.ts"/>
import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../../../shared/user interface/user';
import {Course} from '../../../shared/course';

import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Router, Route } from '@angular/router';
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
   
  }

  getRoute(){
    return window.location.pathname;
  }
  

}
