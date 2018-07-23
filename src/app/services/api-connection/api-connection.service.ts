import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User} from '../../shared/user interface/user';
import {Course} from '../../shared/course';
import { baseDirectiveCreate } from '@angular/core/src/render3/instructions';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const Api = {
  base: 'http://localhost:3000/',
  users: 'users',
  course: 'course'
}
@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  /* This is the service that will make calls to the back-end.
   * There's also a possibility to use a local BE, with json-server.
   */

  constructor(private http: HttpClient) {}

  registerUser(userData: User): Observable<User> {
    return this.http.post<User>(
      Api.base + Api.users,
      userData,
      httpOptions
    );
  }
  
  deleteUser(id:Number): Observable<User> {
    return this.http.delete<any>(Api.base+Api.users +`/${id}`)
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
  }

  updateCourseProgress(id:Number, courseData: Course): Observable<Course> {
    return this.http.put<Course>(Api.base + Api.course + `/${id}`, courseData, httpOptions);
  }

  updateUser(id: Number, userData: User): Observable<User> {
    return this.http.put<User>(Api.base+ Api.users + `/${id}`, userData, httpOptions);
  }


  fakeLogin(email: String, password: String): Observable<User[]> {
    return this.http.get<User[]>(Api.base+ Api.users + `?email=${email}&password=${password}`);
  }

  loginUser(email: String, password: String): Observable<User> {
    return this.http.get<User>(Api.base+ Api.users + `?email=${email}&password=${password}`);
  }

  getUserById(id: Number): Observable<User> {
    return this.http.get<User>(Api.base+ Api.users + `?id=${id}`);
  }


  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(Api.base + Api.course);
  }
}
