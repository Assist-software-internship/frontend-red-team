import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  /* This is the service that will make calls to the back-end.
   * There's also a possibility to use a local BE, with json-server.
   */

  constructor(private http: Http) { }
}
// registerUser(user : User){
//   const body: User = {
//     password: user.password_register,
//     email: user.Email,
//     name: user.FirstName,
//     last_ame: user.LastName
//   }
//   return this.http.post('http://localhost:3000/users', body);
// }