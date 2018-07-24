import { Component, OnInit } from '@angular/core';
import { Course } from '../../../shared/course';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';

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
  constructor(private dataService: ApiConnectionService) {
    this.courseTitle = 'Browse through all Finance courses for Alexa';
    this.courseSubtitle = 'Pick the one you like and start learning';
  }

  ngOnInit() {
    this.getAllCourses();
  }
  getAllCourses() {
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

}
