import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseTitle: string;
  public courseSubtitle: string;
  coursesData =[{
    image: 'assets/images.jpeg',
    title: 'Internet Banner Advertising Most Reliable Form of Web Advertising',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, it amet, consectetur adipisicing elit.',
    button: 'Finance'
  }
  ,{
    image: 'assets/images.jpeg',
    title: 'Internet Banner Advertising Most Reliable Form of Web Advertising',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, it amet, consectetur adipisicing elit.',
    button: 'Finance'}
  ,{
    image: 'assets/images.jpeg',
    title: 'Internet Banner Advertising Most Reliable Form of Web Advertising',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, it amet, consectetur adipisicing elit.',
    button: 'Finance'}
  ,{
    image: 'assets/images.jpeg',
    title: 'Internet Banner Advertising Most Reliable Form of Web Advertising',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, it amet, consectetur adipisicing elit.',
    button: 'Finance'}
  ,{
    image: 'assets/images.jpeg',
    title: 'Internet Banner Advertising Most Reliable Form of Web Advertising',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, it amet, consectetur adipisicing elit.',
    button: 'Finance'}
  ,{
    image: 'assets/images.jpeg',
    title: 'Internet Banner Advertising Most Reliable Form of Web Advertising',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, it amet, consectetur adipisicing elit.',
    button: 'Finance'}
  ];
  constructor() { 
    this.courseTitle = 'Browse through all Finance courses for Alexa';
    this.courseSubtitle = 'Pick the one you like and start learning';
  }

  ngOnInit() {
  }

}
