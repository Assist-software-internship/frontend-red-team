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

  ngOnInit() {
 
  }
}