import { Component, OnInit, Output } from '@angular/core';
import {User} from '../../../shared/user interface/user';
import { ApiConnectionService } from '../../../services/api-connection/api-connection.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Output()
  public user: User = new User();

  constructor(private dataService: ApiConnectionService) { }

  ngOnInit() {
  }
 
  ngAfterViewInit() {
    this.getUserProfile();
  }
  
  getUserProfile(): void {
    this.dataService.getUserById(parseInt(localStorage.getItem('id'))).subscribe(res => {
      this.user = res[0];
      console.log('Users ', this.user);
    });
  }

  

}
