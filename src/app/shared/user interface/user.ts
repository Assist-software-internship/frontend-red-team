export interface User {
  id?: Number;
  active: Number;
  name: String;
  last_name: String;
  email: String;
  password: String;
}
export interface Course{
  id?: Number;
  small_description: String;
  long_description: String;
  tags: String;
  images: String;
}
