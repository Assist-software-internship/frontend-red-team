import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../shared/category';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listCategory = [
    { title: 'Astrology', id: 1 },
    { title: 'Finance', id: 2 },
    { title: 'Grammar', id: 3 },
    { title: 'Fun Facts', id: 4 },
    { title: 'Jokes', id: 5 },
    { title: 'Life Hacks', id: 6 },
    { title: 'Computers', id: 7 },
    { title: 'Math', id: 8 },
    { title: 'Economy', id: 9 },
    { title: 'Math 1', id: 10 },
    { title: 'Economy 2', id: 11 },
    { title: 'Math 4 ', id: 12 },
    { title: 'Economy 4', id: 13 },
    { title: 'Math 5', id: 14 },
    { title: 'Economy 5', id: 15 },
    { title: 'Math 6', id: 16 },
    { title: 'Economy 7', id: 17 },
    { title: 'Sports', id: 18 }
  ];

  public category: Category = new Category();
  public admin_role = true;
  filteredStatus = '';
  public editMode = false;
  editClick = false;
  deleteClick = false;
  max = 6;
  public categoryTitle: string;
  public categorySubtitle: string;
  constructor(private router: Router) {
    this.categoryTitle = 'Browse through best learning courses for Alexa';
    this.categorySubtitle = 'Pick the one you like and start learning';
  }
  ngOnInit() {
    console.log('length of categories', this.listCategory.length)
  }
  createCat() {
    this.editMode = !(this.editMode);
  }
  editCat() {
    this.editClick = !(this.editClick);
    this.deleteClick = false;
  }
  deleteCat() {
    this.deleteClick = !(this.deleteClick);
    this.editClick = false;
  }
  openEdit(item) {
    this.editMode = !(this.editMode);
    console.log(item);
    this.category = item;
  }
  discoverMore(): void {
    this.max = this.max + 6;
  }
  displayLess() {
    this.max = this.max - 6;
  }
  search_function() {
    const searchCategory = this.filteredStatus;
    console.log('selected value: ', searchCategory);
  }
  toCourses(id: Number) {
    localStorage.setItem('category_id', id.toString());
    this.router.navigate(['/courses']);
    console.log('selected id=', id)
  }
}
