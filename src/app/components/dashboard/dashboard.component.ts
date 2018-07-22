import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listCategory = ['Astrology', 'Finance' , 'Grammar', 'Fun Facts', 'Jokes', 'Life Hacks']
  public categoryTitle: string;
  public categorySubtitle: string;
  constructor() {
    this.categoryTitle = 'Browse through best learning courses for Alexa';
    this.categorySubtitle = 'Pick the one you like and start learning';
   }


  ngOnInit() {
    
  }
  
}
