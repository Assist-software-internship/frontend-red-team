import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../shared/category';
import { ApiConnectionService } from '../../services/api-connection/api-connection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listCategory = [
    { title: 'Math 1', id: 18 },
    { title: 'Economy 2', id: 17 },
    { title: 'Math 4 ', id: 16 },
    { title: 'Economy 4', id: 15 },
    { title: 'Math 5', id: 14 },
    { title: 'Economy 5', id: 13 },
    { title: 'Math 6', id: 12 },
    { title: 'Economy 7', id: 11 },
    { title: 'Sports', id: 10 },
    { title: 'Astrology', id: 9, tags: 'Science' },
    { title: 'Finance', id: 8 },
    { title: 'Grammar', id: 7 },
    { title: 'Fun Facts', id: 6 },
    { title: 'Jokes', id: 5 },
    { title: 'Life Hacks', id: 4 },
    { title: 'Computers', id: 3 },
    { title: 'Math', id: 2 },
    { title: 'Economy', id: 1 },
  ];

  public category: Category = new Category();
  public admin_role = true;
  public filteredStatus = '';
  public editMode = false;
  public createMode = false;
  public editClick = false;
  public deleteClick = false;
  max = 6;
  public categoryTitle: string;
  public categorySubtitle: string;
  public title = '';
  public tag = '';
  constructor(private router: Router, private dataCategory: ApiConnectionService) {
    this.categoryTitle = 'Browse through best learning courses for Alexa';
    this.categorySubtitle = 'Pick the one you like and start learning';
  }
  ngOnInit() {
    // this.getAllCategories();
    // console.log('length of categories', this.listCategory.length)
    console.log('length of categories', this.category)
  }
  createMenu() {
    this.createMode = !(this.createMode);
    this.title = '';
    this.tag = '';
  }
  editMenu() {

    this.editClick = !(this.editClick);
    this.deleteClick = false;
  }
  deleteMenu() {
    this.deleteClick = !(this.deleteClick);
    this.editClick = false;
  }

  newCat() {
    this.listCategory.push({
      id: this.listCategory.length + 1, title: this.title, tags: this.tag
    });
    this.createMode = false;

  }
  saveCat() {
    this.editMode = false;
  }
  openDelete(item) {
    for (let index = 0; index < this.listCategory.length; index++) {
      const element = this.listCategory[index];
      if (element.id == item.id) {
        this.listCategory.splice(this.listCategory.indexOf(element), 1);
      }
    }
  }
  openEdit(item) {
    this.editMode = true;
    console.log(item);
    this.category = item;
  }
  cancel() {
    this.editMode = false;
    this.createMode = false;
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
  // getAllCategories() {
  //   this.dataCategory.getAllCategories().subscribe(res => {
  //     console.log('category list=  ', res);
  //     this.category = res;
  //   })
  // }
}
