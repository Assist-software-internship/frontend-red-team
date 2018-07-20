export class User {
  id?: Number;
  active: Number;
  name: String;
  last_name: String;
  email: String;
  password: String;
  priv:Number;
  
  constructor() {
    this.active = 0;
    this.priv = 0;
  }
}
