import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ApiConnectionService } from './services/api-connection/api-connection.service';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { CourseComponent } from './components/admin/course/course.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { UserComponent } from './components/admin/user/user.component';
import { LoginComponent } from './components/shared/login/login.component';
import { HeroComponent } from './components/shared/hero/hero.component';
import { CourseListComponent } from './components/shared/course-list/course-list.component';
import { ChapterListComponent } from './components/shared/chapter-list/chapter-list.component';
import { MyAccountComponent } from './components/shared/my-account/my-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChapterQuestionsComponent } from './components/shared/chapter-questions/chapter-questions.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchPipe } from './components/dashboard/search.pipe';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'account', component: MyAccountComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  { path: 'courses', component: CourseListComponent, canActivate: [AuthGuard] },

  {
    path: 'courses/:courseId',
    component: ChapterListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'courses/:courseId/:chapterId',
    component: ChapterQuestionsComponent, canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    CourseComponent,
    UserListComponent,
    UserComponent,
    LoginComponent,
    HeroComponent,
    CourseListComponent,
    ChapterListComponent,
    MyAccountComponent,
    DashboardComponent,
    ChapterQuestionsComponent,
    FooterComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [ApiConnectionService, AuthGuard, AuthService],
  bootstrap: [AppComponent],
})

export class AppModule { }
