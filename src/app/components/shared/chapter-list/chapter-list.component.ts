import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NgForm } from '@angular/forms';
import { elementEnd } from '@angular/core/src/render3/instructions';


@NgModule({
  declarations: [ChapterListComponent],
  imports: [BrowserModule, FormsModule],
  providers: []
})

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  desc = " While saying goodbye means accepting that a part of our life is over, it also ... of that reality had started to creepinto my psyche weeks ago, when I was being fitted ... We journeyed together, watching each other grow through the innocence of "
  listCategory = [
    { category: 'Astrology', id: 1, cat_id: 1, chapter: "I", title: 'Welcome Ioan', shortdesc: this.desc },
    { category: 'Astrology', id: 2, cat_id: 2, chapter: "II", title: 'Welcome to blablabla', shortdesc: "desc2" },
    { category: 'Astrology', id: 3, cat_id: 2, chapter: "III", title: 'Welcome to blablabla', shortdesc: this.desc },
    { category: 'Astrology', id: 4, cat_id: 1, chapter: "IV", title: 'Welcome to blablabla', shortdesc: "asdasdasdasdasdasd123123123" },
    { category: 'Astrology', id: 5, cat_id: 2, chapter: "V", title: 'Welcome to blablabla', shortdesc: this.desc },
    { category: 'Astrology', id: 6, cat_id: 1, chapter: "VI", title: 'Welcome to blablabla', shortdesc: "asdasdasdasdasdasd123123123" },
    { category: 'Astrology', id: 7, cat_id: 2, chapter: "VII", title: 'Welcome to blablabla', shortdesc: "asdasdasdasdasdasd123123123" },
    { category: 'Astrology', id: 8, cat_id: 2, chapter: "VIII", title: 'Welcome to blablabla', shortdesc: this.desc },
    { category: 'Astrology', id: 9, cat_id: 1, chapter: "IX", title: 'Welcome to blablabla', shortdesc: "asdasdasdasdasdasd123123123" },
    { category: 'Astrology', id: 10, cat_id: 1, chapter: "X", title: 'Welcome to blablabla', shortdesc: "asdasdasdasdasdasd123123123" },
  ];
  public course_id = parseInt(localStorage.getItem('course_id'))
  filteredStatus = '';
  max = 4;
  public account_role = 1;

  public live_chapter = '';
  public live_title = '';
  public live_desc = '';


  public createVisible = false;
  public editEnabled = false;
  public deleteEnabled = false;

  public categoryTitle: string;
  public categorySubtitle: string;
  public category: string;
  public courses = [];

  public notification = { visible: false, Message: "", color: 0 };

  constructor() {
    this.category = "finance";
    this.categoryTitle = 'Internet Banner Advertising Most Reliable Forms Of Web Advertising';
    this.categorySubtitle = 'There is a lof of exciting stuff going on in the stars above us that make astromy so much fun.';
  }

  ngOnInit() {

  }

  fullCuriculum(): void {
    this.max = this.courses.length;
  }

  toggleCreate() {

    if (this.createVisible)
      this.createVisible = false
    else {
      this.createVisible = true
      this.deleteEnabled = false;
      this.editEnabled = false
    }
  }

  createNewCourse() {
    if (this.live_title.length > 0 || this.live_chapter.length > 0 || this.live_desc.length > 0) {
      this.listCategory.push({ category: 'Astrology', id: this.listCategory.length + 1, cat_id: this.course_id, chapter: this.live_chapter, title: this.live_title, shortdesc: this.live_desc });
      this.notificationPush("Chapter " + this.live_chapter + " created! ", "#006FFF")
      this.reset();
    }
  }

  reset() {
    this.live_chapter = '';
    this.live_title = '';
    this.live_desc = '';
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
        this.notificationPush("Chapter " + element.chapter + " was deleted", "red")
      }
    }
  }

  editCh(item) {

    for (let index = 0; index < this.listCategory.length; index++) {
      const element = this.listCategory[index];
      if (element.id == item.id) {

        if (this.live_chapter != '' || this.live_desc != '') {
          let text = "";
          if (this.live_chapter != element.chapter) {
            text += "Chapter \"" + element.chapter + "\" was renamed to \"" + this.live_chapter + "\"\n";
          }
          if (this.live_title != element.title) {
            text += "Title \"" + element.title + "\" changed to \"" + this.live_title + "\"\n";
          }
          if (this.live_desc != element.shortdesc) {
            text += "Description \"" + element.shortdesc + "\" edited to \"" + this.live_desc + "\"";
          }
          this.notificationPush(text, "green")
          this.listCategory[index] = { category: item.category, id: item.id, cat_id: item.cat_id, chapter: this.live_chapter, title: this.live_title, shortdesc: this.live_desc };
          this.reset();


          // console.log(this.live_chapter)
          // this.listCategory.splice(this.listCategory.indexOf(element), 1);
        }
      }
    }


    this.toggleeditChapters();
  }

  getCoursesByCategory() {
    this.courses = [];
    for (let index = 0; index < this.listCategory.length; index++) {
      const element = this.listCategory[index];
      if (this.course_id == element.cat_id) {
        this.courses.push(element);
      }
    }
    return this.courses;
  }

  notificationPush(msg, color) {
    this.notification.visible = true;
    this.notification.Message = msg;
    this.notification.color = color;
    var x = this;

      setTimeout(function() {
        x.notification.visible=false;
      }, 4000);
  }
  
  // onKey(event: any,target,i) {
  //   this.live_chapter = target=="chapter"?event.target.value:(this.live_chapter=='')?i.chapter:this.live_chapter;
  //   this.live_title = target=="title"?event.target.value:(this.live_title=='')?i.title:this.live_title;
  //   this.live_desc = target=="desc"?event.target.value:(this.live_desc=='')?i.shortdesc:this.live_desc;
  //   setTimeout(function () {
  //     x.notification.visible = false;
  //   }, 4000);
  // }

  onKey(event: any, target, i) {
    this.live_chapter = target == "chapter" ? event.target.value : (this.live_chapter == '') ? i.chapter : this.live_chapter;
    this.live_title = target == "title" ? event.target.value : (this.live_title == '') ? i.title : this.live_title;
    this.live_desc = target == "desc" ? event.target.value : (this.live_desc == '') ? i.shortdesc : this.live_desc;
  }

}