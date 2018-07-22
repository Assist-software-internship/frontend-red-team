export class User {
  id?: Number;
  active: Number;
  name: String;
  last_name: String;
  email: String;
  password: String;

  constructor() {
    this.active = 1;
  }
}
