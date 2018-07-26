import { Component, OnInit } from '@angular/core';
import { Course } from '../../../shared/course';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public course: Course[];
  public courseTitle: string;
  public courseSubtitle: string;
  max = 2;
  constructor(private dataService: ApiConnectionService, private router: Router) {
    this.courseTitle = 'Browse through all Finance courses for Alexa';
    this.courseSubtitle = 'Pick the one you like and start learning';
  }

  ngOnInit() {
    // this.getAllCourses();
    this.getCoursesByCategory();
  }
  getAllCourses() {
    const course_id = localStorage.getItem('category_id');
    this.dataService.getAllCourses().subscribe(res => {
      this.course = res;
      console.log('Course ', this.course);
      console.log('Course length:', this.course.length);
    });
  }
  discoverMore(): void {
    this.max = this.max + 2;
  }
  displayLess(): void {
    this.max = this.max - 2;
  }
  getCoursesByCategory() {
    const course_id = parseInt(localStorage.getItem('category_id'));
    this.dataService.getCoursesByCategory(course_id).subscribe(res => {
      this.course = res;
      console.log(res);
    })
  }
  chapterByCourseId(id) {
    localStorage.setItem('course_id', id.toString());
    this.router.navigate(['/courses/', id]);
  }

}
