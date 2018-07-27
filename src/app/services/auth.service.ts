import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthService {
  public token = localStorage.getItem('token');
  public success_message = localStorage.getItem('succes_message');
  constructor(private router: Router) { }

  isAuthenticated() {
    console.log(typeof this.token)
    if (this.token === 'undefined' && this.success_message === 'false') {
      return false;
    }
    return true;
  }
}