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
    { id: 1, chapter_id: 1, question: 'This is a question 1', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 2, chapter_id: 1, question: 'This is a question 2', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 3, chapter_id: 1, question: 'This is a question 3', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 4, chapter_id: 1, question: 'This is a question 4', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 5, chapter_id: 1, question: 'This is a question 5', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 6, chapter_id: 2, question: 'This is a question 6', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 7, chapter_id: 3, question: 'This is a question 7', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 8, chapter_id: 3, question: 'This is a question 8', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 9, chapter_id: 3, question: 'This is a question 10', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 10, chapter_id: 3, question: 'This is a question 11', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 12, chapter_id: 4, question: 'This is a question 12', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 13, chapter_id: 4, question: 'This is a question 13', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 14, chapter_id: 5, question: 'This is a question 14', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' },
    { id: 15, chapter_id: 5, question: 'This is a question 15', answer1: 'answer1', answer2: 'answer2', answer3: 'answer3' }

  ];

  public course_id = parseInt(localStorage.getItem('course_id'));

  filteredStatus = '';
  max = 6;
  public account_role = 1;
  public current_chapter = 1;


  public live_answer1;
  public live_answer2;
  public live_answer3;
  public live_question;

  public createVisible = false
  public editEnabled = false;
  public deleteEnabled = false;
  public checkedContent = false;

  public category: string;
  public chapterTitle: string;
  public questions = [];

  public notification = { visible: false, Message: "", color: 0 };

  constructor() {

    this.category = "CHAPTER " + this.current_chapter;
    this.chapterTitle = 'Internet Banner Advertising Most Reliable Forms Of Web Advertising';

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
      if (this.current_chapter == element.chapter_id) {
        this.questions.push(element);
      }
    }
    return this.questions;
  }
  nextChapter() {
    this.current_chapter++;
    this.category = "CHAPTER " + this.current_chapter;
  }

  prevChapter() {
    this.current_chapter--;
    this.category = "CHAPTER " + this.current_chapter;
  }

  getChapters() {

    let chapters = [];
    for (let index = 0; index < this.listCategory.length; index++) {
      const element = this.listCategory[index].chapter_id;

      if (!chapters.includes(element)) {
        chapters.push(element)
      }
    }
    return chapters.length
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
  updateSelections(event) {
    console.log(event);
    if (event.target.checked) {
      event.target.unchecked;
      this.checkedContent = true;
    }
  }

}
