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
    { id: 1, chapter_id: 1, question: 'This is a question', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 2, chapter_id: 1, question: 'This is a question', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 3, chapter_id: 1, question: 'This is a question', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' }
  ];

  public course_id = parseInt(localStorage.getItem('course_id'));

  filteredStatus = '';
  max = 6;
  public account_role = 1;

  public live_answer1;
  public live_answer2;
  public live_answer3;
  public live_question;

  public createVisible = false
  public editEnabled = false;
  public deleteEnabled = false;

  public answer: string;
  public question: string;
  public questions = [];

  public notification = { visible: false, Message: "", color: 0 };

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
      this.createVisible = true;
    this.deleteEnabled = false;
    this.editEnabled = false;
  }

  createNewCourse() {
    if (this.live_question.length > 0 || this.live_answer1.length > 0 || this.live_answer2.length > 0 || this.live_answer3.length > 0) {
      this.listCategory.push({ id: this.listCategory.length + 1, chapter_id: this.course_id, question: this.live_question, answer1: this.live_answer1, answer2: this.live_answer2, answer3: this.live_answer3 });
      this.reset();
    }

    // this.live_answer1;
    // this.live_answer2;
    // this.live_answer3;
    // this.live_question;
    // this.createVisible = false
  }
  reset() {
    this.live_question = '';
    this.live_answer1 = '';
    this.live_answer2 = '';
    this.live_answer3 = '';
    this.createVisible = false;
  }
  cancel() {
    this.reset();
  }

  toggleeditChapters() {
    if (this.editEnabled)
      this.editEnabled = false
    else
      this.editEnabled = true
    this.deleteEnabled = false;
    this.createVisible = false;
  }

  toggledeleteChapters() {
    if (this.deleteEnabled)
      this.deleteEnabled = false;
    else {
      this.deleteEnabled = true;
      this.editEnabled = false;
      this.createVisible = false;
    }

  }

  deletech(item) {
    for (let index = 0; index < this.listCategory.length; index++) {
      const element = this.listCategory[index];
      if (element.id == item.id) {
        this.listCategory.splice(this.listCategory.indexOf(element), 1);
        this.notificationPush("Question -> " + element.question + " <- was deleted", "red")
      }
    }
    // this.toggledeleteChapters();
  }

  editCh(item) {

    for (let index = 0; index < this.listCategory.length; index++) {
      const element = this.listCategory[index];
      if (element.id == item.id) {
        console.log(item.question + " :" + this.live_question);
        // this.listCategory[index] =  { category: item.category, id: item.id, cat_id:item.cat_id,chapter:this.live_chapter, title : this.live_title, shortdesc :  this.live_desc  };
        // console.log(this.live_chapter)
        // this.listCategory.splice(this.listCategory.indexOf(element), 1);
      }
    }


    this.toggleeditChapters();
  }

  getCoursesByCategory() {
    this.questions = [];
    for (let index = 0; index < this.listCategory.length; index++) {
      const element = this.listCategory[index];
      if (this.course_id == element.chapter_id) {
        this.questions.push(element);
      }
    }
    return this.questions;
  }

  notificationPush(msg, color) {
    this.notification.visible = true;
    this.notification.Message = msg;
    this.notification.color = color;
    var x = this;

    setTimeout(function () {
      x.notification.visible = false;
    }, 3000);
  }

}
