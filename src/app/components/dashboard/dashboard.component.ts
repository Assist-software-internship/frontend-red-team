import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listCategory = [
    { title: 'Astrology' },
    { title: 'Finance' },
    { title: 'Grammar' },
    { title: 'Fun Facts' },
    { title: 'Jokes' },
    { title: 'Life Hacks' },
    { title: 'Computers' },
    { title: 'Math' },
    { title: 'Economy' },
    { title: 'Math 1' },
    { title: 'Economy 2' },
    { title: 'Math 4 ' },
    { title: 'Economy 4' },
    { title: 'Math 5' },
    { title: 'Economy 5' },
    { title: 'Math 6' },
    { title: 'Economy 7' },
    { title: 'Sports' }
  ];
  filteredStatus = '';
  max = 6;
  public categoryTitle: string;
  public categorySubtitle: string;
  constructor() {
    this.categoryTitle = 'Browse through best learning courses for Alexa';
    this.categorySubtitle = 'Pick the one you like and start learning';
  }
  ngOnInit() {
    console.log('length of categories', this.listCategory.length)
  }
  discoverMore(): void {
    this.max = this.max + 6;
  }
  displayLess() {
    this.max = this.max - 6;
  }
  search_function() {
    const searchCategory = this.filteredStatus;
    console.log('selected value: ', searchCategory);
  }
}
