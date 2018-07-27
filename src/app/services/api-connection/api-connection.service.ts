import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../../shared/user interface/user';
import { Course } from '../../shared/course';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

const Api = {
  base: 'http://192.168.210.116:8080/',
  users: 'users',
  userByEmail: 'user?email=',
  register: 'create/user',
  login: 'login',
  reset: 'reset',
  userById: 'user?id=',
  categories: 'categories',
  createCategory: 'create/category',
  coursesByCategoryId: 'courses?category=',
  courseById: 'courses?id=',
  createCourse: 'create/course',
  chaptersByCourseId: 'chapters?course=',
  chapterById: 'chapter?id=',
  createChapter: 'create/chapter',
  questionsByChapterId: 'create/chapter',
  createQuestions: 'create/question',
  user: 'user',
  course: 'course',
  course_category: '/courses?category='

};

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  /* This is the service that will make calls to the back-end.
   * There's also a possibility to use a local BE, with json-server.
   */

  constructor(private http: HttpClient) {
  }


  updateCourse(courseData: Course): Observable<Course> {
    return this.http.put<Course>(
      Api.base + Api.course,
      courseData,
      httpOptions
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(Api.base + Api.users);
    // return this.http.get<User[]>('http://localhost:3000/' + Api.users);
  }

  getUserByEmail(email: String): Observable<User[]> {
    return this.http.get<User[]>(Api.base + Api.users + `?email=${email}`);
  }

  // getUserByEmail(email: String): Observable<User[]> {
  //   return this.http.get<User[]>(Api.base + Api.userByEmail + email);
  // }

  registerUser(userData: User): Observable<User> {
    // return this.http.post<User>(Api.base + Api.register, JSON.stringify(userData), httpOptions);
    return this.http.post<User>(Api.base + Api.register, userData, httpOptions);
  }

  loginUser(userData: User): Observable<User> {
    return this.http.post<User>(Api.base + Api.login, userData, httpOptions);
  }

  resetPassword(userData: User) {
    return this.http.post<User>(Api.base + Api.reset, userData, httpOptions);
  }

  getUserById(id: Number): Observable<User> {
    return this.http.get<User>(Api.base + Api.users + `?id=${id}`);
  }

  // getUserById(id: Number): Observable<User> {
  //   return this.http.put<User>(Api.base + Api.userById + id);
  // }
  // getAllCategories(): Observable<Category[]> {
  //   return this.http.get<Category[]>(Api.base + Api.categories);
  // }
  // createCategory(): Observable<Category[]> {
  //   return this.http.post<Category[]>(Api.base + Api.createCategory);
  // }
  // getCoursesByCategory(id: Number): Observable<Course[]> {
  // return this.http.get<Course[]>(Api.base + Api.coursesByCategoryId + id);
  // }
  // getCourseById(id: Number): Observable<Course[]> {
  // return this.http.get<Course[]>(Api.base + Api.courseById + id);
  // }
  // createCourse(courseData: Course): Observable<Course> {
  // return this.http.post<Course>(Api.base + Api.createCourse);
  // }
  // getChaptersByCourseId(id: Number): Observable<Chapter[]> {
  // return this.http.get<Chapter[]>(Api.base + Api.chaptersByCourseId + id);
  // }
  // getChapterBy(id: Number): Observable<Chapter[]> {
  // return this.http.get<Chapter[]>(Api.base + Api.chapterById + id);
  // }
  // createChapter(courseData: Chapter): Observable<Course> {
  // return this.http.post<Chapter>(Api.base + Api.createChapter);
  // }
  // getQuestionsByChapterId(id: Number): Observable<Questions[]> {
  // return this.http.get<Questions[]>(Api.base + Api.questionsByChapterId + id);
  // }
  // createQuestions(courseData: Questions): Observable<Questions> {
  // return this.http.post<Questions>(Api.base + Api.createQuestions);
  // }

  deleteUser(id: Number): Observable<User> {
    return this.http.delete<any>(Api.base + Api.users + `/${id}`)
  }
  updateCourseProgress(id: Number, courseData: Course): Observable<Course> {
    return this.http.put<Course>(Api.base + Api.course + `/${id}`, courseData, httpOptions);
  }

  updateImage(id: Number, userData: User): Observable<User> {
    return this.http.put<User>(Api.base + Api.course + `/${id}`, userData, httpOptions);
  }

  updateUser(user_id: Number, userData: User): Observable<User> {
    return this.http.put<User>(
      Api.base + Api.user + `/${user_id}`,
      userData,
      httpOptions
    );
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/' + 'course');
  }

  getCoursesByCategory(id: Number): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/course?id=' + id);
  }
}
