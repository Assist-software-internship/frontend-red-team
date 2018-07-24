import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listCategory = [
    { title: 'Ana' },
    { title: 'Maria' },
    { title: 'Bia' },
    { title: 'Ion' },
    { title: 'Cindy' },
    { title: 'Ionut' },
    { title: 'Daria' },
    { title: 'Dan' },
    { title: 'Delia' },
    { title: 'Mihai' }
  ];
  // listCategory = [
  //   'Astrology',
  //   'Finance',
  //   'Grammar',
  //   'Fun Facts',
  //   'Jokes',
  //   'Life Hacks',
  //   'Category 7',
  //   'Category 8',
  //   'Category 9',
  //   'Category 10',
  //   'Category 11',
  //   'Category 12',
  // ];
  filteredStatus = '';
  max = 6;
  public categoryTitle: string;
  public categorySubtitle: string;
  constructor() {
    this.categoryTitle = 'Browse through best learning courses for Alexa';
    this.categorySubtitle = 'Pick the one you like and start learning';
  }
  ngOnInit() {

  }
  discoverMore(): void {
    this.max = this.max + 6;
  }
  displayLess() {
    if (this.max === this.listCategory.length) {
      this.max = this.max - 6;
    }
  }
  search_function() {
    const searchCategory = this.filteredStatus;
    console.log('selected value: ', searchCategory);
  }
}
