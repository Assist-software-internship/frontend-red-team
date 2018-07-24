export class User {
  user_id?: Number;
  active?: Number;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  roles?: Number;
  image: File;
  constructor() {
    this.active = 0;
    this.roles = 0;
  }
}
