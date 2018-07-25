import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-questions',
  templateUrl: './chapter-questions.component.html',
  styleUrls: ['./chapter-questions.component.css']
})
export class ChapterQuestionsComponent implements OnInit {



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
