import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-chapter-questions',
  templateUrl: './chapter-questions.component.html',
  styleUrls: ['./chapter-questions.component.css']
})
export class ChapterQuestionsComponent implements OnInit {

  listCategory = [
    { question: 'This is a question', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { question: 'This is a question', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { question: 'This is a question', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' }
  ];

  filteredStatus = '';
  max = 6;
  public account_role = 1;

  public live_answer1;
  public live_answer2;
  public live_answer3;
  public live_question;
  public createVisible = false

  public answer: string;
  public question: string;
  constructor() {
    this.answer = 'Internet Banner Advertising Most Reliable Forms Of Web Advertising';
    this.question = 'There is a lof of exciting stuff going on in the stars above us that make astromy so much fun.';
  }

  ngOnInit() {
  }

  fullCuriculum(): void {
    this.max = this.listCategory.length;
  }

  toggleCreate() {

    if (this.createVisible)
      this.createVisible = false
    else
      this.createVisible = true
  }

  createNewCourse() {
    this.listCategory.push({ question: this.live_question, answer1: this.live_answer1, answer2: this.live_answer2, answer3: this.live_answer3 });

    this.live_answer1;
    this.live_answer2;
    this.live_answer3;
    this.live_question;
    this.createVisible = false
  }

}
