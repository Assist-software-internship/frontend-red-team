import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {



  public categoryTitle: string;
  public categorySubtitle: string;
  public category: string;
  constructor() {
    this.category = "finance";
    this.categoryTitle = 'Internet Banner Advertising Most Reliable Forms Of Web Advertising';
    this.categorySubtitle = 'There is a lof of exciting stuff going on in the stars above us that make astromy so much fun.';
  }

  ngOnInit() {
  }

}
