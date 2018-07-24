export class User {
  user_id?: Number;
  active?: Number;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  role?: Number;
  constructor() {
    this.active = 0;
    this.role = 0;
  }
}
