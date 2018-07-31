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
  // listCategory = [
  //   { title: 'Math 1', id: 18, tags: 'Science' },
  //   { title: 'Economy 2', id: 17, tags: 'Science' },
  //   { title: 'Math 4 ', id: 16, tags: 'Science' },
  //   { title: 'Economy 4', id: 15, tags: 'Science' },
  //   { title: 'Math 5', id: 14, tags: 'Science' },
  //   { title: 'Economy 5', id: 13, tags: 'Science' },
  //   { title: 'Math 6', id: 12, tags: 'Science' },
  //   { title: 'Economy 7', id: 11, tags: 'Science' },
  //   { title: 'Sports', id: 10, tags: 'Science' },
  //   { title: 'Astrology', id: 9, tags: 'Science' },
  //   { title: 'Finance', id: 8, tags: 'Science' },
  //   { title: 'Grammar', id: 7, tags: 'Science' },
  //   { title: 'Fun Facts', id: 6, tags: 'Science' },
  //   { title: 'Jokes', id: 5, tags: 'Science' },
  //   { title: 'Life Hacks', id: 4, tags: 'Science' },
  //   { title: 'Computers', id: 3, tags: 'Science' },
  //   { title: 'Math', id: 2, tags: 'Science' },
  //   { title: 'Economy', id: 1, tags: 'Science' },
  // ];

  public categoriesList: any[] = [];
  public admin_role: boolean;
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
  public role_id = parseInt(localStorage.getItem('role_id'));
  public newCategory: Category = new Category();
  constructor(private router: Router, private dataCategory: ApiConnectionService) {
    this.categoryTitle = 'Browse through best learning courses for Alexa';
    this.categorySubtitle = 'Pick the one you like and start learning';
  }
  ngOnInit() {
    this.getAllCategories();
    if (this.role_id === 1) {
      this.admin_role = true
    }
    else
      this.admin_role = false;
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
    // this.listCategory.push({
    //   id: this.listCategory.length + 1, title: this.title, tags: this.tag
    // });
    // this.createMode = false;
    this.dataCategory.createCategory(this.newCategory).subscribe(res => {
      this.createMode = false;
      this.categoriesList.push(this.newCategory);
    });

  }
  saveCat() {
    this.editMode = false;
  }
  openDelete(item) {
    for (let index = 0; index < this.categoriesList.length; index++) {
      const element = this.categoriesList[index];
      if (element.id == item.id) {
        this.categoriesList.splice(this.categoriesList.indexOf(element), 1);
      }
    }
  }
  openEdit(item) {
    this.editMode = true;
    console.log(item);
    this.newCategory = item;
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
  getAllCategories() {
    this.dataCategory.getAllCategories().subscribe((res: any) => {
      console.log('category list=  ', res.objects);
      this.categoriesList = res.objects;
    })
  }
}
