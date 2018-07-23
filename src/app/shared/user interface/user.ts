export class User {
  id?: Number;
  active: Number;
  name: String;
  last_name: String;
  email: String;
  password: String;
  role: Number;
  constructor() {
    this.active = 0;
    this.role = 0;
  }
}
