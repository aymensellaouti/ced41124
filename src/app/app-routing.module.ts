import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './components/second/second.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './auth/login/login.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth.guard';
import { SliderComponent } from './rxjs/slider/slider.component';
import { APP_ROUTES } from './config/app-routes.config';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: APP_ROUTES.cv, component: CvComponent },
  { path: 'slider', component: SliderComponent },
  {
    path: `${APP_ROUTES.cv}/add`,
    component: AddCvComponent,
    canActivate: [authGuard],
  },
  { path: `${APP_ROUTES.cv}/:id`, component: DetailsCvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'color', component: ColorComponent },
  { path: ':myParam', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
