import { Component, OnInit, Input } from '@angular/core';
import { Router, Route, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() category: string;
  
  public currentRoute
  public isCourseIDPage
  
  constructor(router: Router) { 
    router.events.subscribe((url:any) => console.log(url));
    this.currentRoute = router.url;
    var paths = this.currentRoute.split('/');

    if(paths[1]=="courses" && paths[2]){
      this.isCourseIDPage = true;
    }else{
      this.isCourseIDPage = false;
    }
  }


  ngOnInit() {
  }

}
