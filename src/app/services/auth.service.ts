import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthService {
  constructor(private router: Router) { }
  // token: string;
  token: boolean;

  isAuthenticated() {
    return this.token != null;
  }
}