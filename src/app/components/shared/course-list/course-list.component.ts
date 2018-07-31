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
  public newCourse: Course = new Course();
  public courseTitle: string;
  public courseSubtitle: string;
  public max = 2;
  public admin_role = true;
  public image_url = '';
  public editMode = false;
  public createMode = false;
  public editClick = false;
  public deleteClick = false;
  public categoryId = Number(localStorage.getItem('category_id'));

  constructor(private dataService: ApiConnectionService, private router: Router, private courseData: ApiConnectionService) {
    this.courseTitle = 'Browse through all Finance courses for Alexa';
    this.courseSubtitle = 'Pick the one you like and start learning';
  }

  ngOnInit() {
    this.getAllCourses();
    this.getCoursesByCategory();
    console.log('id-ul categoriei=', this.categoryId);
    console.log(typeof this.categoryId);
  }
  createMenu() {
    this.createMode = !(this.createMode);
  }
  createCourse() {
    this.newCourse.categoryId = this.categoryId;
    console.log(this.newCourse);
    this.courseData.createCourse(this.newCourse).subscribe(res => {
      this.createMode = false;
      this.course.push(this.newCourse);
    });
  }
  openDelete(item) {
    for (let index = 0; index < this.course.length; index++) {
      const element = this.course[index];
      if (element.id == item.id) {
        this.course.splice(this.course.indexOf(element), 1);
      }
    }
  }
  cancel() {
    this.createMode = false;
    this.editMode = false;
  }
  saveCourse() {
    this.editMode = false;
  }
  editMenu() {
    this.editClick = !(this.editClick);
    this.deleteClick = false;
  }
  openEdit(item) {
    this.editMode = true;
    this.course = item;

  }
  deleteMenu() {
    this.deleteClick = !(this.deleteClick);
    this.editClick = false;
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
    this.dataService.getCoursesByCategory(course_id).subscribe((res: any) => {
      this.course = res.objects;
      console.log(res.objects);
    })
  }
  chapterByCourseId(id) {
    localStorage.setItem('course_id', id.toString());
    this.router.navigate(['/courses/', id]);
  }

}
