import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
declarations:[ChapterListComponent],
imports:[BrowserModule,FormsModule],
providers:[]
})

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  desc = " While saying goodbye means accepting that a part of our life is over, it also ... of that reality had started to creepinto my psyche weeks ago, when I was being fitted ... We journeyed together, watching each other grow through the innocence of "
  listCategory = [
    { category: 'Astrology', id: 1, chapter:"I", title : 'Welcome to blablabla', shortdesc : this.desc },
    { category: 'Astrology', id: 1, chapter:"II", title : 'Welcome to blablabla', shortdesc : "desc2" },
    { category: 'Astrology', id: 1, chapter:"III", title : 'Welcome to blablabla', shortdesc :  this.desc  },
    { category: 'Astrology', id: 1, chapter:"IV", title : 'Welcome to blablabla', shortdesc : "asdasdasdasdasdasd123123123" },
    { category: 'Astrology', id: 1, chapter:"V", title : 'Welcome to blablabla', shortdesc :  this.desc  },
    { category: 'Astrology', id: 1, chapter:"VI", title : 'Welcome to blablabla', shortdesc : "asdasdasdasdasdasd123123123" },
    { category: 'Astrology', id: 1, chapter:"VII", title : 'Welcome to blablabla', shortdesc : "asdasdasdasdasdasd123123123" },
    { category: 'Astrology', id: 1, chapter:"VIII", title : 'Welcome to blablabla', shortdesc :  this.desc  },
    { category: 'Astrology', id: 1, chapter:"IX", title : 'Welcome to blablabla', shortdesc : "asdasdasdasdasdasd123123123" },
    { category: 'Astrology', id: 1, chapter:"X", title : 'Welcome to blablabla', shortdesc : "asdasdasdasdasdasd123123123" },
  ];
  filteredStatus = '';
  max = 6;
  public account_role = 1;

  public live_chapter
  public live_title;
  public live_desc;
  public createVisible = false

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
  
  fullCuriculum(): void {
    this.max = this.listCategory.length;
  }

  toggleCreate(){
   
    if(this.createVisible)
      this.createVisible = false
      else
      this.createVisible=true
  }

  createNewCourse(){
    this.listCategory.push({ category: 'Astrology', id: 200, chapter:this.live_chapter, title : this.live_title, shortdesc : this.live_desc});

    this.live_chapter
    this.live_title;
    this.live_desc;
    this.createVisible = false
  }

}
